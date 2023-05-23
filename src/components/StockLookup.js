import { useState, useEffect } from "react";
import StockDetails from "./StockDetails";
import { type } from "@testing-library/user-event/dist/type";


const StockLookup = (props) => {
    var symbol  =''
    const [textBoxValue, setTextBoxValue] = useState("")         
    const [stockSymbol, setStockSymbol] = useState("")
    const [cikString, setCikString] = useState("")
    
    
    // const [stock, setStock]= useState([])
    const [companyName, setCompanyName] = useState([])

    const normalizeCik = (cik) => {
        console.log(cik.length)


    }

    fetch("company_tickers.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    // const dataArray = Array.from(data)
    // dataArray.forEach(stock => {
    //     if (stock.ticker===stockSymbol) {
    //         setCompanyName(stock.title)
    //         console.log(stock.title)
    //     }else{
    //         console.log('not found')
    //     }
    // })

   
    for (let i=0;i<Object.keys(data).length;i++) {
      if (data[i].ticker==`${stockSymbol}`) {
    
          setCompanyName(data[i].title)

          setCikString(data[i].cik_str)
          console.log(cikString)

           let fullCikStr = cikString.toString().padStart(10,'0')
        console.log(fullCikStr.length)
        console.log(typeof(fullCikStr))
        console.log(fullCikStr)
        let fullcikint = fullCikStr + 0
        console.log(fullcikint)
        console.log(typeof(fullcikint))
        // setCikString(Number(fullCikStr))
           //   setCikString(cikString.toString().padStart(10,'0'))
        //   setCikString(Number(fullCikStr))
        
       
    
      }
}
   })
         
const fetchData = () =>{
    fetch("https://data.sec.gov/submissions/CIK0000320193.json")
    .then((response) => response.json())
    .then((data) => (data.name));
    }
  
    useEffect(() => {
      fetchData()
      // fetchCompany()
    },[])
     








    const handleSubmit = (event) => {
        event.preventDefault()
        setStockSymbol(textBoxValue)
        setTextBoxValue("")
        
    }
    return (
        <>
        
            <form onSubmit={handleSubmit}>
                <label>Enter the stock symbol or Company Name</label>
                <input 
                    type="text" 
                    value={textBoxValue}
                    onChange={e => setTextBoxValue(e.target.value)}
                />
            <button>Submit</button>
            </form>
            <StockDetails ticker={stockSymbol} name={companyName} cik={cikString}/>
            
        </>
    )
}

export default StockLookup


