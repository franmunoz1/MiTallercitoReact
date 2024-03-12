/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

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

    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex">
                    <img src={item.image} alt={item.title} className="w-1/2" />

                    <div className="ml-4">
                        <h2 className="text-3xl font-bold">{item.title}</h2>
                        <p className="text-gray-600">Precio: ${item.price}</p>
                        <p className="text-gray-600">Stock disponible: {item.stock}</p>

                        <div className="mt-4">
                            <label htmlFor="quantity" className="mr-2">
                                Cantidad:
                            </label>
                            <button onClick={handlePlus}>+</button>
                            <p>{quantity}</p>
                            <button onClick={handleLess}>-</button>
                        </div>

                        <button
                            onClick={() => handleAdd(item, quantity)}
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                        >
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail