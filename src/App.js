import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './Components/Country/Country';
import Cart from './Components/Cart/Cart';

function App() {

  const [countries, setContries] = useState([])

  const [cart, setCart] = useState([])


  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data =>{
      setContries(data);
    })
    .catch(error =>console.error(error))
  }, []);


const handleAddCountry = (country) => {
  const newCountry = [...cart, country]
  setCart(newCountry);
  console.log('country added',country)
}


  return (
    <div className="App">
      <h1>Country lodaded: {countries.length}  </h1>
      <h3>Country Added: {cart.length} </h3>
      <Cart cart={cart}></Cart>
      {
        countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country> )
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
