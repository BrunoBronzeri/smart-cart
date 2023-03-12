import { useState } from 'react'

import Input from './Input'
import SubmitButton from './SubmitButton'

import styles from './ProductForm.module.css'

export default function ProductForm({ handleSubmit, btnText, productData }) {

    const [product, setProduct] = useState(productData || {})

    const submit = (e) => {
        e.preventDefault()
        console.log(product)
        handleSubmit(product)
    }

    function handleChange(e) { //método dinâmico de alterar o valor no input (console)
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text'
                text='Nome do Produto'
                name='name'
                placeholder='Insira o nome do produto'
                handleOnChange={handleChange}
                value={product.name ? product.name : ''} 
            />
            <Input 
                type='number'
                text='Valor do Produto'
                name='price'
                placeholder='Insira o preço do produto (R$)'
                handleOnChange={handleChange}
                value={product.price ? product.price : ''}
            />
            <SubmitButton text={btnText}/>
        </form>
    );
}
