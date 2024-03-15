import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const { cart, handleDelete, totalPrice } = useContext(CartContext);
    const { register, handleSubmit } = useForm();

    const buy = (data) => {
        const order = {
            client: data,
            products: cart,
            totalPrice: totalPrice(),
        };

        const orderRef = collection(db, "orders");

        addDoc(orderRef, order).then((doc) => {
            setOrderId(doc.id);
            handleDelete();
        });
    };

    if (orderId) {
        return (
            <div className="py-8 p-2">
                <h2 className="text-2xl font-semibold mb-4">Gracias por tu compra!</h2>
                <p className="text-lg">Tu id de pedido es: {orderId}</p>
            </div>
        );
    }

    return (
        <div className="py-8 p-2">
            <h1 className="text-3xl font-bold mb-6">Finalizar compra</h1>
            <form onSubmit={handleSubmit(buy)} className="space-y-4">
                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    {...register("nombre")}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                <input
                    type="text"
                    placeholder="Ingresa tu email"
                    {...register("email")}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                <input
                    type="number"
                    placeholder="Ingresa tu número de teléfono"
                    {...register("phone")}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                    Comprar
                </button>
            </form>
        </div>
    );
};

export default Checkout;
