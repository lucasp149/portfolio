import styles from "./styles.module.css";
import developer from "../img/Developer.pdf";

export default function About() {

    return (
        <div className={styles.about}>

            <div className={styles.center}>
                <div>
                    <h1>About Me</h1>
                    <p>I'm from Argentina. A eternal student. A team worker. A experienced entrepreneur and a challenge seeker. You can check my experience
                        and all my works over time.
                    </p>
                   <a href={developer} target="_blank"> <button className={styles.download}>Download CV</button></a>
                </div>

            </div>

        </div>

    )
}