// src/Cart.js

import React from 'react';
import { useCart } from '../../components/CardContext/CardContext';
import Footer from '../../layout/Footer/Footer';

const Basket = ({ setCount }) => {
    const { cartItems, updateItemQuantity, removeItem } = useCart();

    const handleIncreaseQuantity = (productId) => {
        const product = cartItems.find(item => item.id === productId);
        if (product) {
            updateItemQuantity(productId, product.quantity + 1);
        }
    };

    const handleDecreaseQuantity = (productId) => {
        const product = cartItems.find(item => item.id === productId);
        if (product && product.quantity > 1) {
            updateItemQuantity(productId, product.quantity - 1);
        }
    };

    const handleRemoveItem = (productId) => {
        removeItem(productId);
    };

    setCount(cartItems.length);

    return (
        <>
        <div className="cart">
            <h2>Корзина</h2>
            {cartItems.length === 0 ? (
                <p>Ваша корзина пуста</p>
            ) : (
                <ul>
                    {cartItems.map(item => (
                        <li key={item.id}>
                            <h3>{item.name}</h3>
                            <p>Цена: {item.price} ₽</p>
                            <p>Количество: {item.quantity}</p>
                            <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                            <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                            <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
        <Footer />
        </>
    );
};

export default Basket;
