import { Link } from 'react-router-dom';

import styles from './SubmitButton.module.css'

export default function SubmitButton({ text }) {

    return(
        <div>
            <button className={styles.btn}>{text}</button>
            <button1 className={styles.btn}>
                <Link className={styles.link
                } to='/products'>Finalizar</Link>
            </button1>
        </div>
    );
}
