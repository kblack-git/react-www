import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import StockLookup from './components/StockLookup'
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';




function App() {
  // const [stock, setStock]= useState([])

// const fetchCompany = () => {
  // fetch("company_tickers.json")
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(Object.keys(data).length)
  //   console.log(data[0].ticker)
  //   for (let i=0;i<Object.keys(data).length;i++) {
  //     if (data[i].ticker=="AAPL") {
  //     console.log(data[i].title)
  //   }
  //   }
   
    

  // })
    
  
  


  
  return (
    
    <BrowserRouter>
    <Navbar />
      <Routes>
      {/* <Header /> */}
      {/* <StockLookup /> */}
      <Route exact path="/" element={<StockLookup />} />
      <Route path="/stocklookup" element={<StockLookup />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />


      
      {/* <Footer /> */}
      </Routes>
    </BrowserRouter>
  )}

   
    


export default App;
