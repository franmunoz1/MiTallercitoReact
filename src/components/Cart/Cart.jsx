import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, handleDelete, totalPrice } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div>
            {cart.length === 0 ? (
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <p className="text-4xl font-bold mb-4">¡Tu carrito está vacío!</p>
                        <p className="text-lg text-gray-600">Explora nuestra tienda y encuentra productos increíbles.</p>
                    </div>
                </div>
            ) : (
                <div className="p-4 space-y-4">
                    <div className="space-y-4">
                        {cart.map((product) => (
                            <div key={product.id} className="flex items-center border p-4">
                                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover mr-4" />
                                <div>
                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                    <p>Cantidad: {product.quantity}</p>
                                    <p>Precio unitario: {product.price}</p>
                                    <p>Precio total: {product.price * product.quantity}</p>
                                </div>
                            </div>

                        ))}
                    </div>

                    <div>
                        <h3>Precio total del carrito: {totalPrice()}</h3>
                    </div>

                    <div className="flex justify-center space-x-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" onClick={() => navigate('/checkout')}>
                            Ir a pagar
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={handleDelete}>
                            Vaciar carrito
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
