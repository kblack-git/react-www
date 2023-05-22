import './App.css';
import StockLookup from './components/StockLookup'
import Header from './components/Header';
import Footer from './components/Footer';
import StockDetails from './components/StockDetails';
import { useState, useEffect } from 'react';


function App() {
  const [stock, setStock]= useState([])

  const fetchData = () =>{
  fetch("https://data.sec.gov/submissions/CIK0000320193.json")
  .then((response) => response.json())
  .then((data) => setStock(data.name));
  }

  useEffect(() => {
    fetchData()
  },[])




  
 

  console.log(stock)
  return (
    <>
    <Header />
    <StockLookup />
    <StockDetails data={stock}/>
    <Footer />
    </>
  )}
    


export default App;
