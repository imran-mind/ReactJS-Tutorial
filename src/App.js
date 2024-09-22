import { useRef, useState } from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null);
  const [name, setName] = useState('');

  const handleSubmit = () => {
    const value = inputRef.current.value.toUpperCase();
    console.log(value);
    setName(value);
  }
  return (
    <div className="App">
      <h1>Uncontrolled Component</h1>
      <input
        type='text'
        placeholder='Enter your name'
        ref={inputRef}
      />
      <button onClick={handleSubmit}>Submit</button>

      {name && <h1>{name}</h1>}
    </div>
  );
}

export default App;
