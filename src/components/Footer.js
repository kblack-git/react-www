import React from "react";
import { Link } from "react-router-dom"
import styles from '../styles/footer.module.css'

const Footer = () => {
    return (
        <>
        <footer className={styles.footer}>
        <Link to="/about">About</Link>
        <Link to="/about">Contact</Link>
        </footer>
        </>

    )
}

export default Footer