import './App.css';

function App() {

  const handleSubmit = (greet, event) => {
    console.log(event)
    alert('how are you : ' + greet + " and The event was " + event.type);
  }

  const handleInputchange = (e) => {
    console.log(e.target.value);
    console.log(e.type)
  }
  //onclick -> onClick
  return (
    <div className="App">
      <h1>React Events</h1>
      <input
        type='text'
        onChange={handleInputchange}
      />
      <button onClick={(event) => handleSubmit("Good morning", event)}>Submit Good morning</button>
      <button onClick={(event) => handleSubmit("Good Afternoon", event)}>Submit After noon</button>
    </div>
  );
}

export default App;
