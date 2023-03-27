import React from 'react'
import { Link } from 'react-router-dom'


const CartEmpty = () => {
    return (
        <>
            <div className="cart cart--empty">
                <h2>
                    Корзина пустая <icon> 😒 </icon>
                </h2>
                <p>
                    Вероятнее всего, вы ничего не добавили в корзину.
                </p>
                <img src='https://cdn3.iconfinder.com/data/icons/internet-relative/200/Cart-512.png' alt="StoreImg"/>
                            <Link to="/" className="button button--black">
                    <span>Назад</span>
                    
                </Link>
            </div>
        </>

    )
}

export default CartEmpty
