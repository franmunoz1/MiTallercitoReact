import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart } = useContext(CartContext);

    const navigate = useNavigate();

    return (
        <>
            <div>
                {cart.map((product) => (
                    <div key={product.id}>
                        <h2>{product.title}</h2>
                        <p>Cantidad: {product.quantity}</p>
                        <p>Precio unitario: {product.price}</p>
                        <p>Precio total: {product.price * product.quantity}</p>
                        <img src={product.image} alt={product.title} />
                    </div>
                ))}
            </div>

            <div>
                <button onClick={() => navigate('/checkout')}>Ir a pagar</button>
                <button>Vaciar carrito</button>
            </div>
        </>
    );
};

export default Cart;
