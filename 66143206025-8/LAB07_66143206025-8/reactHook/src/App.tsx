// import './App.css';

// function App(){
//   return(
//     <div className='container'>
//       <h1>React Hooks Workshop</h1>
//     </div>
//   );
// }

// export default App;

//EXAM01//
// import React, { useState,useEffect } from 'react';
// function App() {
//   // สร้าง state ชื่อ 'count' สำหรับเก็บตัวเลข และสร้างฟังก์ชัน 'setCount' สำหรับอัปเดตค่า
//   // โดยมีค่าเริ่มต้นเป็น 0
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div className="container">
//       <h1>React Hooks Workshop</h1>
//       <h2>Counter Example</h2>
//       <p>ตัวอย่างการใช้งาน UI :)</p>
//       <p>You clicked {count} times</p>
//       <p>และนี่คือการใช้ setCount ที่มีการอัปเดตค่า count โดยใช้ค่าปัจจุบัน</p>
//       {/* การอัปเดตค่า count โดยใช้ฟังก์ชันที่รับค่าปัจจุบันของ state */}
//       <button onClick={() => setCount(prevCount => prevCount + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default App;

//EXAM0203//
//In src/App.tsx
import React, { useState,useEffect } from 'react';
import './App.css';

interface ApiUser{id : number;name : string}
function App() {
  // State เพิ่มหน้าปัด Counter
  const [count, setCount] = useState<number>(0);
  // State เพิ่มหน้าปัดสำหรับการพิมพ์ข้อความ input field
  const [name, setName] = useState<string>('Guest');

  const [user,setUser] = useState<ApiUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // ฟังก์ชัน handleNameChange สำหรับการเปลี่ยนแปลงข้อความใน input field
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then((data : ApiUser)=>{
        setUser(data);
        setLoading(false);
      });
  },[]);
  return (
    <div className="container">
      <h1>React Hooks Workshop</h1>

      <div>
        <h2>Counter Example</h2>
        <p>{count} times</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>
          Increment
        </button>
      </div>

      <div>
        <h2>Input Form Example</h2>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
        />
        <h3>Hello, {name || 'Guest'}!</h3>
      </div>

      <div>
        <h2>API Fetching Example</h2>
        <p>{loading ? 'กำลัง UI กำลังโหลด loading ...' : 'Loading user...'}</p>
        <p>Welcome, {user?.name}!</p>
      </div>
    </div>
  );

}

export default App;
