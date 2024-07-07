
import styles from "./styles.module.css";
import cara from "../img/face_co.png";

export default function Hero(){


    return(

        <div className={styles.base}>
                
        <h2>Lucas Martín Perez</h2><span>Front End Dev / REACT / APEX</span>
        <div className={styles.card}>
        
   
           
            <div className={styles.left}>
                
                    <ul className={styles.lista}>
                        <h3>Front end</h3>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>REACT</li>
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
                        <h3>QA Automation</h3>
                        <li>JAVA</li>
                        <li>MySql</li>
                        <li>Selenium</li>
                        <li>TestNG</li>
                        <li>Apium</li>
                        
                        <h3>Methodologies</h3>
                        <li>Agile / Scrum / Kanban</li>
                        <li>Git / Github</li>
                        
                    </ul>
            </div>
        </div>

    </div>
    )
}
