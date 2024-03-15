import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const Checkout = () => {

    const { cart, handleDelete, totalPrice } = useContext(CartContext);

    return (
        <div>Checkout</div>
    )
}

export default Checkout