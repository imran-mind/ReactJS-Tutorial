import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    //subs.connect();
    // doc.addEvent('click');
    console.log('use effect hook')
    document.title = `your count is ${count}`
    return () => {
      // cleanup block
      // subs.disconnect();
      // doc.remveoEventList
      console.log('UnMount compn')
    }
  }, [count, name])
  // external api call
  // dom mani
  // service subs
  return (
    <div className="App">
      <h1>useEffect()</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(c => c + 1)}>Counter</button>
    </div>
  );
}

export default App;
