
import styles from "./styles.module.css";
import cara from "../img/face_co.png";

export default function Hero(){


    return(

        <div className={styles.base}>
                
        <h2>Lucas Martín Perez</h2><span>Front End Dev / REACT / APEX</span>
        <div className={styles.card}>
        
   
           
            <div className={styles.left}>
                
                    <ul className={styles.lista}>
                        <h3>Experienced in</h3>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>REACT</li>
                        <li>GitHub</li>
                        <li>SCRUM</li>
                        <li>API rest</li>
                        <h3>Something of</h3>
                        <li>Python</li>
                        <li>Hosting / Domain</li>
                        
                    </ul>
               
            </div>
            <div className={styles.image}>
                <img src={cara} alt="My face"></img>
            </div>
            <div className={styles.right}>
            <ul className={styles.lista}>
                        <h3>Working on</h3>
                        <li>Salesforce</li>
                        <li>APEX</li>
                        <li>Lightning Components</li>
                        
                        <h3>Specializing on</h3>
                        <li>Data Analytics</li>
                        
                    </ul>
            </div>
        </div>

    </div>
    )
}