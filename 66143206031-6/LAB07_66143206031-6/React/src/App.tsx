// In src/App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';

// กำหนด Type สำหรับข้อมูล user ที่จะได้มาจาก API
interface ApiUser {
  id: number;
  name: string;
}

function App() {
  // States จากตัวอย่างก่อนหน้า
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');

  // State ใหม่สำหรับเก็บข้อมูล user ที่ได้จาก API
  const [user, setUser] = useState<ApiUser | null>(null);
  // State ใหม่สำหรับจัดการสถานะการโหลดข้อมูล
  const [loading, setLoading] = useState<boolean>(true);

  // Effect สำหรับเปลี่ยน Title (เหมือนเดิม)
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // Effect สำหรับดึงข้อมูล API (ทำงานครั้งเดียว)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((data: ApiUser) => {
        setUser(data);
        setLoading(false);
      });
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  return (
    <div className="container">
      <h1>React Hooks Workshop</h1>

      <h2>Counter Example</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>
        Click me
      </button>

      <hr />

      <h2>Input Form Example</h2>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <h3>Hello, {name || 'Guest'}!</h3>

      <hr />
      <h2>API Fetching Example</h2>
      {/* แสดง UI ตามสถานะ loading */}
      {loading ? <p>Loading user...</p> : <p>Welcome, {user?.name}!</p>}
    </div>
  );
}

export default App;