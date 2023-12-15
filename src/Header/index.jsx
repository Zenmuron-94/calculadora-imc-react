import Img from '../images/dieta.png'
import styles from './Header.module.css'

const Header = () => {
    return(
        <div className='container'>
            <header className={styles.header}>
            <img src={Img} alt="" />
            <h1 className={styles.titulo}>Calculadora de IMC</h1>
        </header>
        </div>
        
    )
}

export default Header