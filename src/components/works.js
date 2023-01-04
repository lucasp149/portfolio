import Individual from "./individual";
import styles from "./styles.module.css";

export default function Works(){
    return(
        <div className={styles.works}>
            <Individual url="https://lucasp149.github.io/dadosproject/" photo="./throwYourDados.jpg" name="Dados" gitUrl="https://github.com/lucasp149/dadosproject"></Individual>
            <Individual url="https://lucasp149.github.io/possession/" photo="./possession.jpg" name="Possession game" gitUrl="https://github.com/lucasp149/possession"></Individual>
            <Individual url="https://lucasp149.github.io/f1trivia/" photo="./f1trivia.jpg" name="F1 Trivia" gitUrl="https://github.com/lucasp149/f1trivia"></Individual>
            <Individual url="https://lucasp149.github.io/diego/" photo="./diego.jpg" name="Diego Maradona's CV" gitUrl="https://github.com/lucasp149/diego"></Individual>
            <Individual url="https://lucasp149.github.io/yearprogress" photo="./yearprogress.jpg" name="Year Progress" gitUrl="https://github.com/lucasp149/yearprogress"></Individual>
            <Individual url="https://lucasp149.github.io/todolist/" photo="./todolist.jpg" name="My Notes" gitUrl="https://github.com/lucasp149/todolist"></Individual>

        </div>
    )
}