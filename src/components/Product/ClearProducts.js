import styles from './ClearProducts.module.css'

export default function ClearProducts() {

    function Clc() {

        // var count = 1

        // while (count <= 10) {
        //     fetch("http://localhost:5000/products/"+count, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     })
        //     .then((resp) => resp.json())
        //     .then(data => {
        //         console.log('success', data)
        //     })
        //     count++;
        // }
        // return(window.location.reload())
    }

    return (
        <button className={styles.btn} onClick={Clc}>Limpar Carrinho</button>
    );
}
