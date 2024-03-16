/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ item }) => {
    const cartContext = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);

    const { handleAdd } = cartContext

    const handlePlus = () => {
        quantity < item.stock && setQuantity(quantity + 1);
    };

    const handleLess = () => {
        quantity > 1 && setQuantity(quantity - 1);
    };

    const notify = () => toast.success('Producto agregado al carrito!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center justify-center">
                <img src={item.image} alt={item.title} className="w-1/2 rounded-lg shadow-lg" />

                <div className="ml-4">
                    <h2 className="text-3xl font-bold text-gray-800">{item.title}</h2>
                    <p className="text-gray-600">Precio: ${item.price}</p>
                    <p className="text-gray-600">Stock disponible: {item.stock}</p>

                    <div className="mt-4 flex items-center">
                        <label htmlFor="quantity" className="mr-2">Cantidad:</label>
                        <button onClick={handleLess} className="px-3 py-1 bg-gray-200 rounded-md text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">-</button>
                        <p className="px-4">{quantity}</p>
                        <button onClick={handlePlus} className="px-3 py-1 bg-gray-200 rounded-md text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500">+</button>
                    </div>

                    <button
                        onClick={() => {
                            handleAdd(item, quantity);
                            notify();
                        }}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Agregar al carrito
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
