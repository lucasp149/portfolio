import styles from "./styles.module.css";

export default function Contact() {

    function handleEnter(e){
        if(e.target.id=="linked"){
            document.getElementsByClassName(styles.contact)[0].style.backgroundColor = "#1d48976c";
            document.getElementsByClassName(styles.linkedP)[0].style.opacity = 1;
        }
        if(e.target.id=="mail"){
            document.getElementsByClassName(styles.contact)[0].style.backgroundColor = "#9c0a0a8e";
            document.getElementsByClassName(styles.mailP)[0].style.opacity = 1;
        }
        console.log(e.target.id);
    }

    function handleLeave(){
        document.getElementsByClassName(styles.contact)[0].style.backgroundColor = "#1d971d6c";
        document.getElementsByClassName(styles.linkedP)[0].style.opacity = 0;
        document.getElementsByClassName(styles.mailP)[0].style.opacity = 0;
    }

    return (
        <div className={styles.contact}>


 
            <div className={styles.contactIndividual}> <a href="https://www.linkedin.com/in/lucas-perez-5655901a4/" target="_blank"><img id="linked" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={handleLeave} src="./linked.png"></img><p className={styles.linkedP}> Find me on LinkedIn</p></a></div>
            <div className={styles.contactIndividual}> <a href="mailto:lucasp149@gmail.com?Subject=Contacto" target="_blank"> <img id="mail" onMouseEnter={(e)=>handleEnter(e)} onMouseLeave={handleLeave} src="./mail.png"></img> <p className={styles.mailP}>Send me a Mail</p></a></div>
            


        </div>
    )
}