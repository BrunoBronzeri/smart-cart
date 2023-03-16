import styles from './ProductLine.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

export default function ProductLine({ id, name, price, handleRemove }){

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.line}>
            <h4>{name}</h4>
            <p>
                <span></span> R${price}
            </p>
            <button className={styles.action} onClick={remove}>
                <BsFillTrashFill />
            </button>
        </div>
    );
}
