import styles from './ProductLine.module.css'

export default function ProductLine({ id, name, price }){

    return(
        <div className={styles.line}>
            <h4>{name}</h4>
            <p>
                <span></span> R${price}
            </p>
        </div>
    );
}