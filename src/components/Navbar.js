import React from "react";
import { Link } from "react-router-dom"
import styles from '../styles/header.module.css'

const Navbar = () => {
    return (

        <>
            <header className={styles.header}>
                <h1></h1> 
                    {/* <li> */}
                        <img src={"logo.png"} width='150' height='5%' alt="" />
                        {/* <Link to="/about">About</Link> */}
                        {/* <Link to="/about">Contact</Link> */}
                    {/* </li> */}
                    {/* to={{ pathname: "https://herewecode.io/" }} target="_blank">Click to open HereWeCode (new tab)</Link> */}
            
            
            </header>

        </>

    )
}
export default Navbar
                       
         