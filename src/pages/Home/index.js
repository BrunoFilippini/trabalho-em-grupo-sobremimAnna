import { Link } from "react-router-dom"
import anna from '../../images/Anna.JPG'

import styles from './styles.module.css'

export function Home() {

    return (
        <>
            <div className={styles.styles}>

                <h1>Bem vindos, eu sou a <span>Anna</span>!</h1>
                    <img src={ anna } alt='anna'/>

                    <div>
                        <p>
                            Meus alunos fizeram esta página para treinar React
                        </p>
                        <hr />

                        <p>
                            Aqui você pode saber mais sobre mim clicando nos botões abaixo !
                        </p>
                        <hr />

                        <p>
                            PS: O Ale não deixou a gente usar bootStrap e nos forneceu as fotos :D
                        </p> 
                        <hr />

                    </div>

                    <div className={styles.button}>
                    <Link to="/Pessoal"><button>Pessoal</button></Link>
                    <Link to="/Profissional"><button>Profissional</button></Link>
                    <Link to="/Curiosidades"><button>Curiosidades</button></Link>
                    </div>

            </div>
        </>
    )

}