import { useState, useEffect } from 'react';

import ProductLine from '../product/ProductLine';

import styles from './Products.module.css';

export default function Products () {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products/?_sort=name&_order=asc", {
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

    function removeProduct(id) {  //fnc para apagar os cards tanto do front como do back. Feitos no componente pai:Projects(filho:ProjectCard)
        fetch(`http://localhost:5000/products/${id}`, { //faz um request pra uma URL
            method: 'DELETE', //identificada pelo método (DELETE)  //NOTE: GET->entrega algo UPDATE->atualizar DELETE->deletar
            headers: {
                'Content-Type': 'application/json'  // ao efetuar ação é possível vê-la no terminal 
            },
        })
        .then(resp => resp.json())
        .then(() => {
            setProducts(products.filter((product) => product.id !== id))
        })
        .catch(err => console.log(err))
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
                                handleRemove={removeProduct}
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
                <div className={styles.clc_btn}>
                </div>
            </div>
        </div>
    );
}
