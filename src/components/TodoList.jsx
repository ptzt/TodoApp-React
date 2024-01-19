import TodoItem from "./TodoItem"

const TodoList = ({ todos, onToggleComplete, onDelete }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <TodoItem
                        todo={todo}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                    />
                </li>
            ))}
        </ul>
    )
}

export default TodoList