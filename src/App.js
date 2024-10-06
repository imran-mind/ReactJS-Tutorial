import './App.css';
import useDataFetch from './useDataFetch';

function App() {
  const url = 'https://fakestoreapi.com/products/1';
  const url1 = 'https://fakestoreapi.com/products/2';
  const {
    data: productOne,
    loading: loadingOne,
    error: errorOne
  } = useDataFetch(url);
  const {
    data: productTwo,
    loading: loadingTwo,
    error: errorTwo
  } = useDataFetch(url1);


  if (loadingOne || loadingTwo) return <p>Loading...</p>
  if (errorOne || errorTwo) return <p>Error: {errorOne}</p >
  return (
    <div className="App">
      <h1>Custom hook = useDataFetch </h1>
      <h2>{productOne?.title}</h2>

      <h2>{productTwo?.title}</h2>
    </div>
  );
}

export default App;
