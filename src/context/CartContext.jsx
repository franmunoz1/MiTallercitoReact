/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

const initialCart = JSON.parse(localStorage.getItem('cart')) || [];

export const useCart = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(initialCart);

    const handleAdd = (item, quantity) => {
        const itemAgregado = { ...item, quantity };
        const newCart = [...cart];
        const findProduct = newCart.find((item) => item.id === itemAgregado.id);

        if (findProduct) {
            findProduct.quantity += quantity;
            setCart(newCart);
        } else {
            setCart([...cart, itemAgregado]);
        }
        console.log(newCart)
    };

    const handleDelete = () => {
        setCart([]);
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart, handleAdd, handleDelete }}>
            {children}
        </CartContext.Provider>
    );
};



export { CartContext, CartProvider }