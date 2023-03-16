import { useState, useEffect } from 'react'

import Preview from '../form/Preview';
import ProductForm from '../form/ProductForm';

import styles from './Cart.module.css'

export default function Cart () {

    // var [count, setCount] = useState([])
    // var count = 0

    function addProd(product) {
       
        fetch("http://localhost:5000/products/?_page=1", { //por padrão são dez o limite
        method: "POST",
        headers: {
            'Content-type': "application/json",
        },
        body: JSON.stringify(product),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data) 
            // window.location.reload()        
        })
        .catch(err => console.log(err))
    }

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/products/", {
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

    return(
        <div className={styles.back}>
            <div className={styles.insert_container}>
                <h1>Carrinho de Compras</h1>
                <p>Insira abaixo o nome do produto e o preço respectivo</p>
                <ProductForm handleSubmit={addProd} btnText={'Adicionar Produto'} /> 
                {/* {count<=0 ? addProd : ''} */}
            </div>
            <div className={styles.preview}>
                <h1>Produtos</h1>
                <div>
                    {products.length > 0 &&
                        products.map((product) => (
                            <Preview
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                key={product.id}
                            />
                        ))
                    } 
                </div>
            </div>
        </div>
    );
}
