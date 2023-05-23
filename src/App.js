import './App.css';
import StockLookup from './components/StockLookup'
import Header from './components/Header';
import Footer from './components/Footer';




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
    <>
    <Header />
    <StockLookup />
   
    <Footer />
    </>
  )}
    


export default App;
