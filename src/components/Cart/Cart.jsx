import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const Cart = () => {
    const { cart, handleDelete, totalPrice, deleteProduct, updateQuantity } = useContext(CartContext);
    const [quantities, setQuantities] = useState({}); // State to manage quantities
    const navigate = useNavigate();

    const handleConfirm = () => {
        Swal.fire({
            title: '¿Estás seguro de vaciar el carrito?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Vaciar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete();
                Swal.fire('¡Carrito vaciado con exito!');
            }
        });
    };

    const handleQuantityChange = (productId, quantity) => {
        setQuantities(prevState => ({
            ...prevState,
            [productId]: quantity
        }));
        updateQuantity(productId, quantity);
    };

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
                            <div key={product.id} className="flex items-center justify-between border p-4">
                                <img src={product.image} alt={product.title} className="w-16 h-16 object-cover mr-4" />
                                <div>
                                    <h2 className="text-lg font-semibold">{product.title}</h2>
                                    <p>Cantidad:
                                        <select
                                            value={quantities[product.id] || product.quantity}
                                            onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                                        >
                                            {[...Array(product.stock).keys()].map(num => (
                                                <option key={num} value={num + 1}>{num + 1}</option>
                                            ))}
                                        </select>
                                    </p>
                                    <p>Precio unitario: {product.price}</p>
                                    <p>Precio total: {product.price * (quantities[product.id] || product.quantity)}</p>
                                </div>
                                <div>
                                    <button onClick={() => deleteProduct(product.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                    </svg>
                                    </button>
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
                        <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600" onClick={() => handleConfirm()}>
                            Vaciar carrito
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
