import { useState } from 'react';
import './App.css';

function App() {

  const [isLogin, setIsLogin] = useState(false);

  const Welcome = () => {
    return <h1>Welcome USer</h1>
  }

  const Login = () => {
    return <h1>Login Please</h1>
  }

  return (
    <div className="App">
      <h1>Conditional Rendring in React</h1>
      {
        isLogin && <Welcome />
      }
      {
        !isLogin && <Login />
      }
      <button onClick={() => setIsLogin(!isLogin)}>Submit</button>
    </div>
  );
}

export default App;
