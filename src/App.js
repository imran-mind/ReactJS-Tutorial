import './App.css';

// Navbar
function App() {

  const Search = () => {
    return <div>Search Component</div>
  }

  const Cart = () => {
    return <div>Cart Component</div>
  }

  const Profile = () => {
    return <div>Prifle Component</div>
  }

  const BecomeASeller = () => {
    return <div>Become A seller Component</div>
  }
  return (
    <div className="App">
      <Search />
      <Cart />
      <Profile />
      <BecomeASeller />
    </div>
  );
}

export default App;
