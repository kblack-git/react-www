import React from "react"
import { Link } from "react-router-dom"
import styles from '../styles/companydata.module.css'



const CompanyData = (props) => {
    console.log("test2", props.url)
   
    return (
        <>
        <div classname={styles.component}>
        <h2>{props.exchange} </h2>
        <h2>Primary Business: {props.business}</h2>
        <div className={styles.link}>
            <a className={styles.button} href={`https://${props.url}`}  target="_blank"><input classname={styles.button} type="submit" value="View most recent filing" /> </a>
            
        </div>
        </div>
        </>
    

    )

}

export default CompanyData