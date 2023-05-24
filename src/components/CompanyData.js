import React from "react"
import { Link } from "react-router-dom"



const CompanyData = (props) => {
    console.log("test2", props.url)
   
    return (
        <>
        <h2>Exchange: {props.exchange} </h2>
        <h2>Primary Business: {props.business}</h2>
        <a href={`https://${props.url}`}  target="_blank">Link to company's most recent filing </a>
        </>

    )

}

export default CompanyData