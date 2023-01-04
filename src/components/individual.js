import styles from "./styles.module.css";

export default function Individual({ url, photo, name, gitUrl }) {

   
   

    

    return (
        <div className={styles.project}>
            <h3>{name}</h3>
            <div className={styles.photos}><img src={photo}></img></div>
            <div className={styles.bar}><a className={`${styles.download} ${styles.bottom}`} href={url} target="_blank">IR</a> <a href={gitUrl} target="_blank" className={`${styles.download} ${styles.bottom}`}>GitHub<img className={styles.button} src="/gitLogo.png"></img></a></div>
        </div>

    )
}