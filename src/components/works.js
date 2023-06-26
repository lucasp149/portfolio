import Individual from "./individual";
import styles from "./styles.module.css";
import venture from "../img/donventure.png";
import poss from "../img/possession.jpg";
import f1 from "../img/f1trivia.jpg";
import diego from "../img/diego.jpg";
import year from "../img/yearprogress.jpg";
import todo from "../img/todolist.jpg";


export default function Works(){
    return(
        <div className={styles.works}>
            <Individual url="https://donventura.vercel.app/" photo={venture} name="Don Ventura" gitUrl="https://github.com/lucasp149/donventura/tree/main/front"></Individual>
            <Individual url="https://lucasp149.github.io/possession/" photo={poss} name="Possession game" gitUrl="https://github.com/lucasp149/possession"></Individual>
            <Individual url="https://lucasp149.github.io/f1trivia/" photo={f1} name="F1 Trivia" gitUrl="https://github.com/lucasp149/f1trivia"></Individual>
            <Individual url="https://lucasp149.github.io/diego/" photo={diego} name="Diego Maradona's CV" gitUrl="https://github.com/lucasp149/diego"></Individual>
            <Individual url="https://lucasp149.github.io/yearprogress" photo={year} name="Year Progress" gitUrl="https://github.com/lucasp149/yearprogress"></Individual>
            <Individual url="https://lucasp149.github.io/todolist/" photo={todo} name="My Notes" gitUrl="https://github.com/lucasp149/todolist"></Individual>

        </div>
    )
}