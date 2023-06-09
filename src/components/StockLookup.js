// import { useState, useEffect } from "react";
// import StockDetails from "./StockDetails";
// import { type } from "@testing-library/user-event/dist/type";


// const StockLookup = (props) => {
//     var symbol = ''
//     const [textBoxValue, setTextBoxValue] = useState("")
//     const [stockSymbol, setStockSymbol] = useState("")
//     const [cikString, setCikString] = useState("")


//     // const [stock, setStock]= useState([])
//     const [companyName, setCompanyName] = useState([])

//     const normalizeCik = (cik) => {
//         console.log(cik.length)


//     }


//   async function getJSON(){

//     const response = await fetch("company_tickers.json")
//     const data = await response.json()    
//     for (let i = 0; i < Object.keys(data).length; i++) {
//         if (data[i].ticker == `${stockSymbol}`) {
//             setCompanyName(data[i].title)
//             //   setCikString(data[i].cik_str)
//             setCikString(data[i].cik_str.toString().padStart(10, '0'))
            
            
//         }
//     }
// }



//     async function fetchData(){

//         console.log('cikString=' + cikString)
//         await getJSON()
//         const response = await fetch(`https://data.sec.gov/submissions/CIK${cikString}.json`)
//         const data = await response.json()
//         console.log(data)
//     }

  

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         setStockSymbol(textBoxValue)
//         fetchData()
//         setTextBoxValue("")

//     }
//     return (
//         <>

//             <form onSubmit={handleSubmit}>
//                 <label>Enter the stock symbol or Company Name</label>
//                 <input
//                     type="text"
//                     value={textBoxValue}
//                     onChange={e => setTextBoxValue(e.target.value)}
//                 />
//                 <button>Submit</button>
//             </form>
//             <StockDetails ticker={stockSymbol} name={companyName} cik={cikString} />

//         </>
//     )
// }

// export default StockLookup

// import { useState } from "react";
// import StockDetails from "./StockDetails";
// const StockLookup = () => {
//   const [textBoxValue, setTextBoxValue] = useState("");
//   const [stockSymbol, setStockSymbol] = useState("");
//   const [cikString, setCikString] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setStockSymbol(textBoxValue);
//     try {
//       const response = await fetch("company_tickers.json");
//       const data = await response.json();
//       for (let i = 0; i < Object.keys(data).length; i++) {
//         if (data[i].ticker === textBoxValue) {
//           setCompanyName(data[i].title);
//           setCikString(data[i].cik_str.toString().padStart(10, '0'));
//           console.log('test',cikString)
//           break;
//         }
        
  
//     }
//       const secResponse = await fetch(
//         `https://data.sec.gov/submissions/CIK${cikString}.json`
//       );
//       const secData = await secResponse.json();
//       console.log(secData);
//     } catch (error) {
//       // Handle any errors
//       console.error(error);
//     }
//     setTextBoxValue("");
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>Enter the stock symbol or Company Name</label>
//         <input
//           type="text"
//           value={textBoxValue}
//           onChange={(e) => setTextBoxValue(e.target.value)}
//         />
//         <button>Submit</button>
//       </form>
//       <StockDetails ticker={stockSymbol} name={companyName} cik={cikString} />
//     </>
//   );
// };
// export default StockLookup;

import { useState, useEffect } from "react";
import StockDetails from "./StockDetails";
import CompanyData from "./CompanyData";
import Header from "./Header";
import Footer from "./Footer";
import InfoBox from "./InfoBox";
import FactBox from "./FactBox";
import styles from "../styles/stocklookup.module.css"

const StockLookup = () => {
  const [textBoxValue, setTextBoxValue] = useState("");
  const [stockSymbol, setStockSymbol] = useState("");
  const [cikString, setCikString] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [dataFromSecGov, setDataFromSecGov]= useState("")
  const [recentFilings, setRecentFilings] = useState([])

  const [url, setUrl]= useState("")


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("company_tickers.json");
        const data = await response.json();
        for (let i = 0; i < Object.keys(data).length; i++) {
          if (data[i].ticker === textBoxValue) {
            setCompanyName(data[i].title);
            const cik = data[i].cik_str.toString().padStart(10, "0");
            setCikString(cik);
            break;
          }
        }
      } catch (error) {
        console.error(error);
      }
    };
    if (textBoxValue !== "") {
      fetchData();
    }
  }, [textBoxValue]);

  useEffect(() => {
    const fetchSecData = async () => {
      if (cikString !== "") {
        try {
          const response = await fetch(
            `https://data.sec.gov/submissions/CIK${cikString}.json`
          );
          const data = await response.json();
        //   console.log('secGovFetch', data)
          setDataFromSecGov(data);
        //   console.log(dataFromSecGov)
        //   console.log(dataFromSecGov.filings.recent.accessionNumber[0])
        //   console.log(dataFromSecGov.filings.recent.primaryDocument[0])
        //   console.log(`www.sec.gov/Archives/edgar/data/`+(dataFromSecGov.cik)+'/'+(dataFromSecGov.filings.recent.accessionNumber[0])/replace(/-/g, '')+'/'+(dataFromSecGov.filings.recent.primaryDocument[0]))
        //   setUrl(`www.sec.gov/Archives/edgar/data/${dataFromSecGov.cik}/${(dataFromSecGov.filings.recent.accessionNumber[0]).replace(/-/g, '')}/${dataFromSecGov.filings.recent.primaryDocument[0]}`)
          console.log(url)
          console.log("testing", url)
        } catch (error) {
          console.error(error);
        }
      }
    };
    fetchSecData();
  }, [cikString]);

    
// console.log(`www.sec.gov/Archives/edgar/data/`+(dataFromSecGov.cik)+'/'+(dataFromSecGov.filings.recent.accessionNumber[0]))
// console.log(dataFromSecGov.filings.files.recent) 
// console.log(dataFromSecGov.filings.recent.form) 


  const handleSubmit = (event) => {
    event.preventDefault();
    setStockSymbol(textBoxValue);
    setTextBoxValue("");
    setUrl(`www.sec.gov/Archives/edgar/data/${dataFromSecGov.cik}/${(dataFromSecGov.filings.recent.accessionNumber[0]).replace(/-/g, '')}/${dataFromSecGov.filings.recent.primaryDocument[0]}`)
    // setRecentFilings(`www.sec.gov/Archives/edgar/data/${dataFromSecGov.cik}/${(dataFromSecGov.filings.recent.form)}`)
    // console.log(recentFilings)
    // console.log(dataFromSecGov.CIK0000320193.filings.files.recent)
    // console.log(dataFromSecGov.filings.recent.form) 
    setRecentFilings(dataFromSecGov.filings.recent.form) 
    console.log(dataFromSecGov)
  };    
  return (
    <>
    <div className={styles.form}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Enter stock symbol</label>
        <input
          type="text"
          value={textBoxValue}
          onChange={(e) => setTextBoxValue((e.target.value).toUpperCase())}
        />
        <button>Submit</button>
      </form>
      <StockDetails ticker={stockSymbol} name={companyName} cik={cikString} />
      <CompanyData  business={dataFromSecGov.sicDescription} url={url}/>
      <div className={styles.infoboxes}>
        <div><InfoBox filing1={recentFilings[0]} filing2={recentFilings[1]} filing3={recentFilings[2]} filing4={recentFilings[3]} filing5={recentFilings[5]} filing6={recentFilings[6]}/></div>
        {/* <div><FactBox fact1={dataFromSecGov.phone} fact2={dataFromSecGov.addresses.business.city} fact3={dataFromSecGov.addresses.business.stateOrCountry} fact4={dataFromSecGov.exchanges[0]} fact5={dataFromSecGov.fiscalYearEnd} /></div> */}
        <div><FactBox fact1={dataFromSecGov.phone}   fact5={dataFromSecGov.fiscalYearEnd} /></div>
      </div>
      </div>
      <Footer />
    </>
    
  );
};
export default StockLookup;







