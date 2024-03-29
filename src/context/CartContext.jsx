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
    };

    const quantityCart = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const totalPrice = () => {
        console.log("card", cart)
        return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };

    const updateQuantity = (productId, quantity) => {
        const newCart = cart.map(item => {
            if (item.id === productId) {
                item.quantity = quantity;
            }
            return item;
        });
        setCart(newCart);
    }

    const deleteProduct = (productId) => {
        setCart(cart.filter(item => item.id !== productId))
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart, handleAdd, handleDelete, quantityCart, totalPrice, deleteProduct, updateQuantity }}>
            {children}
        </CartContext.Provider>
    );
};



export { CartContext, CartProvider }