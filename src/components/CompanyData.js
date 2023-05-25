import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/companydata.module.css'



const CompanyData = (props) => {
    console.log("test2", props.url)
   
    return (
        <>
        <h2>{props.exchange} </h2>
        <h2>Primary Business: {props.business}</h2>
        <div className={styles.link}>
            <a href={`https://${props.url}`}  target="_blank">Link to company's most recent filing </a>

        </div>
        </>

    )

}

export default CompanyData