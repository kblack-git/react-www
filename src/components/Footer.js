import React from "react";
import { Link } from "react-router-dom"
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <>
        <footer className={styles.footer} height='75px'>
        <Link to="/about" style={{ textDecoration: 'none', fontWeight:'bold', color:'black' }} > About</Link>
        <Link to="/contact" style={{ textDecoration: 'none', fontWeight:'bold', color:'black'  }}> Contact</Link>
        </footer>
        </>

    )
}

export default Footer