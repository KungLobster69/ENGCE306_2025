// In src/App.tsx
import React, { useState,useEffect } from 'react'; // 1. Import useState
import './App.css';

// 2. กำหนด Type สำหรับข้อมูล To-Do 1 ชิ้น
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  // 3. State สำหรับเก็บรายการ To-Do ทั้งหมด (เป็น Array ของ Todo)
  const [todos, setTodos] = useState<Todo[]>([]);
  // 4. State สำหรับเก็บข้อความที่พิมพ์ใน input
  const [newTodoText, setNewTodoText] = useState<string>('');

  const handleAddTodo = (e: React.FormEvent) => {
  e.preventDefault();
  if (newTodoText.trim() === "") return;

  const newTodo: Todo = {
    id: Date.now(),
    text: newTodoText,
    completed: false
  };

  setTodos(prevTodos => [...prevTodos, newTodo]);
  setNewTodoText("");
  }

  const handleDeleteTodo = (idToDelete:number) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== idToDelete));
  }

  const handleToggleTodo = (idToToggle: number)=>{
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === idToToggle
        ? { ...todo, completed: !todo.completed }
        : todo
      )
    );
  };

  // 1. useEffect สำหรับโหลดข้อมูลจาก localStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos) as Todo[]);
    }
  }, []); // <-- dependency ว่าง = ทำครั้งเดียว

  // 2. useEffect สำหรับบันทึกข้อมูลลง localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]); // <-- dependency คือ todos = ทำทุกครั้งที่ todos เปลี่ยน


  return (
    <div className="container">
    <h1>To-Do List</h1>

    {/* ส่วนของฟอร์มสำหรับเพิ่ม To-Do ใหม่ */}
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        value={newTodoText}
        onChange={(e) => setNewTodoText(e.target.value)}
        placeholder="What needs to be done?"
      />
      <button type="submit">Add Todo</button>
    </form>

    {/* ส่วนแสดงรายการ To-Do ทั้งหมด */}
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(todo.id)}
          />
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
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
