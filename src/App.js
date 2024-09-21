import './App.css';

// Navbar
function App() {

  const Search = () => {
    const name = "Raj";
    return <div>
      <h3>{name}</h3>
      <input placeholder='search product...' />
    </div>
  }

  const Cart = () => {
    return <div>
      <h2>Cart Part</h2>
    </div>
  }

  const Profile = () => {
    return <div>
      <h2>welcome jone</h2>
    </div>
  }

  const Other = () => {
    return <div>
      <h2>Other part</h2>
    </div>
  }


  return (
    <div className="App">
      <Search />
      <Cart />
      <Profile />
      <Other />
    </div>
  );
}

export default App;
