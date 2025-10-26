import './App.css';
import React, {useEffect, useState} from 'react';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  
}


function App(){


    const handleAddtodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodoText.trim() === '') return;

    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoText,
      completed: false 
    };

    setTodos(prevtodos => [...prevtodos, newTodo]);
    setnewTodoText('');
            
    };



    const handleDeletetodo = (idTodelete: number) => {
      setTodos(prevtodos => prevtodos.filter(todo => todo.id !== idTodelete));
    };

     const handleToggletodo = (idToToggle:number) => {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === idToToggle
          ? { ...todo, completed: !todo.completed}
          :todo
        )
        )
    }





    useEffect(() => {
  try {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      const parsed = JSON.parse(savedTodos);
      if (Array.isArray(parsed)) {
        setTodos(parsed as Todo[]);
      }
    }
  } catch (error) {
    console.error("Failed to load todos:", error);
    // กัน error: ถ้าพัง ให้ clear ค่าเก่า
    localStorage.removeItem('todos');
  }
}, []);

  

  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoText, setnewTodoText] = useState<string>('');

  return (
    <div className="container">
      <h1>to-do List</h1>

      <form onSubmit={handleAddtodo}>
        <input type="text" 
        value={newTodoText}
        onChange={e => setnewTodoText(e.target.value)}
        placeholder='What needs to be done?'/>

        <button type='submit'>Add todo</button>
      </form>


      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" 
            checked={todo.completed}
            onChange={() => handleToggletodo(todo.id)}/>

          <span style={{textDecoration: todo.completed? 'line-through' : 'none'}}>{todo.text}</span>
          <button onClick={() => handleDeletetodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}


export default App;