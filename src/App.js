import './App.css';
import Greeting from './Greeting';

function App() {
  // props -> properties
  return (
    <div className="App">
      <Greeting name={"Raj"} age={21} />
      <Greeting name={"Jone"} age={23} />
    </div>
  );
}

export default App;
