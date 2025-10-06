import React, { useEffect, useState } from 'react';
import './App.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setNewTodoText] = useState<string>('');
  const handleAddTodo = (e: React.FormEvent) => { e.preventDefault();
  if (newTodoText.trim() === '') return;
  

  const newTodo: Todo = {
    id: Date.now(),
    text: newTodoText,
    completed: false
  };
  setTodos(preTodos => [...preTodos, newTodo]);
  setNewTodoText('');
};
  const handleToggleTodo = (idToToggle: number) => {
    setTodos(prevTodos => 
      prevTodos.map(todo =>
        todo.id === idToToggle
        ?{ ...todo, completed: !todo.completed}
        : todo
      )
    )
  }  
useEffect(() =>{
  const savedTodos = localStorage.getItem('todos');
  if (savedTodos){
    setTodos(JSON.parse(savedTodos) as Todo[]);
  }
},[]);

useEffect(() => {
 localStorage.setItem('todos', JSON.stringify(todos));  
},[todos]);
  
const handleDeleteTodo = (IdleDeadline: number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== IdleDeadline));
  };
 return (
    <div className="container">
      <h1>To-Do List</h1>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button type="submit">Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;