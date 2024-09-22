import React, { useState } from 'react';
import './App.css';
import EmailInput from './EmailInput';

// Controlled Component
function App() {
  const [name, setName] = useState('');

  // raj -> RAJ
  const handleNameChange = (e) => {
    const value = e.target.value.toUpperCase();
    setName(value);
  }

  return (
    <div className="App">
      <h1>Controlled Component</h1>
      <form>
        <input
          onChange={handleNameChange}
          value={name}
          type='text'
          placeholder='Enter your name'
        />
      </form>

      <EmailInput />
    </div>
  );
}

export default App;
