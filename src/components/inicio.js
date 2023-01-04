import styles from "./styles.module.css";
import About from "./about";
import Works from "./works";
import Contact from "./contact";

export default function Inicio() {
    return (
        <>
            <div className={styles.base}>
                
                <h2>Lucas Martín Perez</h2><span>Junior Dev</span>
                <div className={styles.card}>
                
           
                   
                    <div className={styles.left}>
                        
                            <ul className={styles.lista}>
                                <h3>Experienced in</h3>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JavaScript</li>
                                <li>REACT</li>
                                <li>GitHub</li>
                                <h3>Something of</h3>
                                <li>Python</li>
                                <li>Hosting / Domain</li>
                                
                            </ul>
                       
                    </div>
                    <div className={styles.image}>
                        <img src="./face_co.png"></img>
                    </div>
                    <div className={styles.right}>
                    <ul className={styles.lista}>
                                <h3>Working on</h3>
                                <li>Back end</li>
                                <li>UX</li>
                                <li>Node</li>
                                <li>FireBase</li>
                                <h3>Specializing on</h3>
                                <li>Data Analytics</li>
                                
                            </ul>
                    </div>
                </div>

                <div>⬇</div>

            </div>

            <About></About>
            <Works></Works>
            <Contact></Contact>
        </>
    )
}