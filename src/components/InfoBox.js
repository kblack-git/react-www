import styles from '../styles/infobox.module.css'

const InfoBox = (props) => {
    return(
        <>
            <section className={styles.container}><h3>Recent Filings</h3>
            <p className={styles.filing}>{props.filing1}</p>
            <p className={styles.filing}>{props.filing2}</p>
            <p className={styles.filing}>{props.filing3}</p>
            <p className={styles.filing}>{props.filing4}</p>
            <p className={styles.filing}>{props.filing5}</p>
            <p className={styles.filing}>{props.filing6}</p>
            </section>
        </>
    )
 }
 export default InfoBox