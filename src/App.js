import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const calculation = useMemo(() => expensiveCalc(count), [count]);
  const increment = () => {
    setCount(c => c + 1);
  }

  const addTodos = () => {
    setTodos((t) => [...t, 'New Todo']);
  }

  return (
    <div className='App-header'>
      <div>
        {todos.map((item) => {
          return <div>
            {item}
          </div>
        })}

        <button onClick={addTodos}>Add Todo</button>
      </div>

      <hr></hr>
      <div>
        Count : {count}
        <button onClick={increment}>Incrment</button>
        <h2>Expensive Comp</h2>
        <h1>{calculation}</h1>
      </div>
    </div>
  );
};

const expensiveCalc = (num) => {
  console.log('--expensiveCalc--')
  for (let i = 0; i <= 1000000000; i++) {
    num = num + 1;
  }
  return num;
}


export default App;
