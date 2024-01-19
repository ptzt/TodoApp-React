const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
    return (
        <div>
            <input
                type="checkbox"
                checked={todo.completed || false}
                onChange={() => onToggleComplete(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Eliminar</button>
        </div>
    )
}

export default TodoItem