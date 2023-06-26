import styles from "./styles.module.css";
import gitLogo from "../img/gitLogo.png";

export default function Individual({ url, photo, name, gitUrl }) {






    return (


        <a href={url} target="_blank">
            <div className={styles.project}>

                <h3>{name}</h3>
                <div className={styles.photos}><img src={photo}></img></div>
                <div className={styles.bar}><a className={`${styles.download} ${styles.bottom}`} href={url} target="_blank">IR</a> <a href={gitUrl} target="_blank" className={`${styles.download} ${styles.bottom}`}>GitHub<img className={styles.button} src={gitLogo}></img></a></div>

            </div >
        </a>


    )
}