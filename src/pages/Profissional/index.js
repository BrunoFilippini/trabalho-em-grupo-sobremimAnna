
import styles from "./styles.module.css"

import { Link } from "react-router-dom";

export function Profissional(){
    return (
        <div className={styles.cardContainer}>

            <h2>Experiência</h2>

            <ul className={styles.cardElement}>

                <li>TA Web Developer</li>
                <li>Arquiteta - Desenhista Técnica</li>
                <li>Estagiária de Arquitetura</li>
                
            
            </ul>

            <h2>Formação Acadêmica</h2>

            <ul className={styles.cardElement}>
                <li>Ironhack - Bootcamp Web Developer</li>
                <li>Ironhack - Bootcamp UX/UI Design </li>
                <li>Anhanguera Educacional - Arquitetura e Urbanismo</li>
            </ul>

         

            {/* <h3>Para mais informações, acesse meu <a href="https://www.linkedin.com/in/anna-beatriz-reis/">Linkedin</a> </h3> */}

            <div className={styles.container}>  

                

                <div className={`${styles.btn} ${styles.fbBtn}`}> 

                    <i  className={`${styles.fab} ${styles.faLinkedinIn}`} aria-hidden="true" id="ld" href="https://www.linkedin.com/in/anna-beatriz-reis/"></i>  

                </div>

            </div>


            <Link to="/home"><button>Voltar</button></Link>
        
        </div>
    )
}