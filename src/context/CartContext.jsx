/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

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

    return (
        <CartContext.Provider value={{ cart, setCart, handleAdd }}>
            {children}
        </CartContext.Provider>
    );
};



export { CartContext, CartProvider }
