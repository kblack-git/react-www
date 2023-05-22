import { useState } from "react";

const StockLookup = (props) => {
    var symbol  =''
    const [stockSymbol, setStockSymbol] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()
        setStockSymbol("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Enter the stock symbol</label>
                <input 
                    type="text" 
                    value={stockSymbol}
                    onChange={e => setStockSymbol(e.target.value)}
                />
            <button>Submit</button>
            </form>
        </>
    )
}

export default StockLookup


