import { useState, useEffect } from 'react'
import styles from '../styles/factbox.module.css'

const FactBox = (props) => {
    const [fetched, setFetched] = useState(false)

    useEffect(() => {
        handleFetch()
    }, [props])

    const handleFetch = () => {
        if (props.fact1) {
            setFetched(true)
        }
    }
    return(

        <>
            <section className={styles.container}><h3>Company Facts</h3>
           {fetched && (
            <div>

                <p className={styles.fact}>Phone: {props.fact1}</p>
                <p className={styles.fact}>HQ location: {props.fact2}, {props.fact3}</p>
                <p className={styles.fact}>Stock Exchange: {props.fact4}</p>
                <p className={styles.fact}>Fiscal Year End: {props.fact5}</p>
                <p className={styles.fact}>{props.fact6}</p>
            </div>
            )}

            
            
            </section>
        </>
    )
 }
 export default FactBox