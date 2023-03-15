import styles from './ClearProducts.module.css'

export default function ClearProducts() {

    function Clc() {
        fetch("http://localhost:5000/products/", {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())

        window.location.reload()
    }

    return (
        <button className={styles.btn} onClick={Clc}>Limpar Carrinho</button>
    );
}
