import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import caraDaAnna from '../../images/Annaperfil.jpeg'

export function Pessoal(props){
    return (
        <>
        <body>
            <div className={styles.wrapper}>
            <div className={styles.card}>
                <div> 
                <img src={caraDaAnna} alt="profile imgage" className={styles.card__image} />
                <h2>{props.title}Uma linda dos cachos  </h2>
                <p>{props.description}Falam para tomar cuidado pois voce pode se enganar com a aparencia da anna e achar que ela e a Moana da disney mas no fundo ela e uma megera xD</p>
                </div>
                <button >Clique para Saber mais</button>
            </div>
            </div>
        </body>
            <Link to="/home"><button>Voltar</button></Link>
            
            

            <h1> O RAYZON EXPLODIU TUDO AQUI</h1>
        </>
    )
}