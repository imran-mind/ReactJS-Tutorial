import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [product, setProduct] = useState(null);
  const [id, setId] = useState(1);

  const fetchProduct = async (id) => {
    try {
      const url = 'https://fakestoreapi.com/products/' + id;
      const response = await fetch(url);
      console.log(response)
      const result = await response.json();
      console.log(result);
      setProduct(result);
    } catch (err) {
      console.log('Error : ', err);
    }
  }

  useEffect(() => {
    fetchProduct(id);
  }, [id]) //1 -> 2

  const incrementId = () => {
    setId(id => id + 1)
  }

  return (
    <div className="App">
      <h1>How to call an API</h1>
      {product && <div>
        <h4>{product.title}</h4>
        <img width={100} height={100} src={product.image} alt={product.title} />
      </div>}
      <button onClick={incrementId}>Fetch Another Product Detail</button>
    </div>
  );
}

export default App;
