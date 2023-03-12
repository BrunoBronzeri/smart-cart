import { useState, useEffect } from 'react';

import ProductLine from '../Product/ProductLine';

import styles from './Products.module.css';

export default function Products () {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProducts(data)
        })
        .catch((err) => console.log(err))
    }, [])
    
    function Sum(){
        let total = 0
        for(var i=0; i<products.length; i++) {
            total += parseInt(products[i].price)
        }
        return total
    }
    
    return(
        <div className={styles.back}>
            <div className={styles.insert_container}>
                <h1>Produtos Adicionados</h1>
                <div className={styles.each}>
                    {products.length > 0 &&
                        products.map((product) => (
                            <ProductLine
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                key={product.id}
                            />
                        )) 
                    }
                    <div className={styles.total}>
                        <p>Total</p>
                        <p>R$ {Sum()},00</p>
                    </div>
                </div>
            </div>
            <div className={styles.container_cash}>
                <h1>Controle de Cédulas</h1>
                <h2>Qnt. cédulas por valor</h2>
                <p>{Math.floor(Sum() / 100)}x R$100,00</p>
                <p>{Math.floor((Sum() % 100)/50)}x R$50,00</p>
                <p>{Math.floor(((Sum() % 100)%50)/20)}x R$20,00</p>
                <p>{Math.floor((((Sum()%100)%50)%20)/10)}x R$10,00</p>
                <p>{Math.floor(((((Sum()%100)%50)%20)%10)/5)}x R$5,00</p>
                <p>{Math.floor((((((Sum()%100)%50)%20)%10)%5)/2)}x R$2,00</p>
                <p>{Math.floor(((((((Sum()%100)%50)%20)%10)%5)%2)/1)}x R$1,00</p>
            </div>
        </div>
    );
}
