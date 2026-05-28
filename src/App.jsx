import { useState, useEffect } from 'react';
import './index.css'; // Import CSS with variables

function App() {

  // fetch('https://jsonplaceholder.typicode.com/users/1')
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   return response.json(); // convert to JSON
  // })
  // .then(data => {
  //   console.log("User data:", data);
  // })
  // .catch(error => {
  //   console.error("There was a problem:", error);
  // });

  // async function getUserData() {
  //   try {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch data");
  //     }
  //     const data = await response.json();
  //     console.log("User data:", data);
  //   } catch (error) {
  //     console.error("Error fetching user data:", error);
  //   }
  // }
  
  // getUserData();

  // fetch('https://api.deezer.com/track/3135556')
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Track Title:', data.title);
  //   console.log('ISRC:', data.isrc);
  // })
  // .catch(error => console.error('Error fetching track data:', error));


  // fetch('https://dog.ceo/api/breeds/image/random')
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Random Dog Image URL:', data.status);
  // })
  // .catch(error => console.error('Error fetching dog image:', error));\


  fetch('https://api.adviceslip.com/advice').then(response => response.json())
  .then(data => {
    console.log('output:', data )
    console.log('output:', data.slip.id )
  })
  const [count, setCount] = useState(0);
  const reset = () => setCount(0);

  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode based on state
  const toggleTheme = () => {
    console.log('start');
    setTimeout(() => {
      console.log('midd');
    },1000)

    // setInterval(() => {
    //   console.log('interval')
    // }, 3000)

    // const id = setInterval(() => {console.log('interval')}, 1000);
    //   clearInterval(id);
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.removeAttribute('data-theme');
    }
  }, [darkMode]);

  const add = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, task]);
      setTask('');
    }
  };


  // calculator
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      const evaluated = Function(`return (${input})`)();
      setResult(evaluated);
    } catch {
      setResult('Error');
    }
  };
  return (
    <div>
      <div className="container">
        {/* Theme Toggle Button */}
        <button onClick={toggleTheme}>
          Toggle {darkMode ? 'Light' : 'Dark'} Mode
        </button>

        {/* Counter */}
        <div className="card">
          <h1>Counter</h1>
          <div className="counter">
            <p>Count is: {count}</p>
            <div className="btn-group">
              <button onClick={() => setCount(count + 1)}>Increment</button>
              <button onClick={() => setCount(count - 1)}>Decrement</button>
              <button onClick={reset}>Reset</button>
            </div>
          </div>
        </div>

        {/* To-Do List */}
        <div className="card">
          <h1>To-Do List</h1>
          <div className="todo-input-group">
            <input
              type="text"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
            />
            <button onClick={add}>Add +</button>
          </div>
          <ul className="task-list">
            {taskList.map((t, index) => (
              <li key={index}>{t}</li>
            ))}
          </ul>
        </div>

        {/* calculator */}

        <div className="calculator-container">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result !== '' && `= ${result}`}</div>
      </div>

      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('-')}>-</button>

        {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
          <button key={num} onClick={() => handleClick(num.toString())}>
            {num}
          </button>
        ))}

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={handleEqual}>=</button>
      </div>
    </div>
      </div>
    </div>
  );
}

export default App;
