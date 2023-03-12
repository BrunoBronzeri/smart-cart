import { Link } from "react-router-dom";

import styles from './Menu.module.css'
import logo from '../../images/cart07.png'

export default function Menu () {
    return(
        <nav className={styles.menu}>
            <Link to='/' className={styles.logo}>
                    <img src={logo} alt='cart' />
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>Carrinho</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/products'>Finalizar</Link>
                </li>
            </ul>           
        </nav>
    );
}
