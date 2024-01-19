// src/App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import './index.css'

//Preguntar nombre al usuario la primera vez que entra
const user = 'Tomas'


function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Hacer tarea 1', completed: false },
    { id: 2, text: 'Hacer tarea 2', completed: false },
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <h2>Hola! {user}</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Agregar tarea</button>
      <TodoList
        todos={todos}
        onToggleComplete={handleToggleComplete}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
