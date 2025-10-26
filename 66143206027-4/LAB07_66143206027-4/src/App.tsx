import React,{ useState,useEffect } from 'react';
import './App.css';

interface ApiUser { id: number; name: string;}

function App(){

  const [count, setCount] = useState<number>(0); 
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<ApiUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      document.title = `you clicked ${count} time`;
      console.log;(`Effect ran! Count is now ${count}`);
    }, [count]);


    useEffect(() =>{
      fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then((data: ApiUser) => {
          setUser(data);
          setLoading(false);
      });
    }, []);

  

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }
  return (
    <div className='container'>
        <h1>React Hooks Workshop</h1>

        <h2>counter Example</h2>
        <p>You clicked {count}</p>
        <button onClick={() => setCount(prevcount => prevcount+1)}>
          click me
        </button>

        <hr />

        <h2>Input Form Example</h2>
        <input type="text"
        value={name} 
        onChange={handleNameChange}
        placeholder='Enter your name'/>


        <h3>Hello,{name || 'Guest'}!</h3>
        
        <hr />

        <h2>API Fetching Example</h2>
        {}
        {loading ? <p>Loading user...</p> : <p>Welcome, {user?.name}!</p>}


    </div>
  );
}

export default App;