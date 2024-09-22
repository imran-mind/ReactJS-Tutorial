import { useEffect, useRef } from 'react';
import './App.css';

function App() {

  const inputRef = useRef(null);

  useEffect(() => {
    // inputRef.current.focus();
    inputRef.current.select();
  }, [])
  return (
    <div className="App">
      <h1>useRef() hook</h1>

      <input
        type='text'
        value={"INDIA"}
        ref={inputRef}
      />
    </div>
  );
}

export default App;
