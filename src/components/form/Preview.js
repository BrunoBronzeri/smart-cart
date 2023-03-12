import styles from './Preview.module.css'

export default function Preview ({ id, name, price }) {

    return(
        <div className={styles.line}>
            <h4>{name}</h4>
            <p>
                <span></span> R${price}
            </p>
        </div>
    );
}
