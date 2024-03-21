import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const { cart, handleDelete, totalPrice } = useContext(CartContext);
    const { register, handleSubmit, watch } = useForm();
    const navigate = useNavigate();

    const buy = (data) => {
        const order = {
            client: data,
            products: cart,
            totalPrice: totalPrice(),
            date: new Date()
        };

        const orderRefPromise = addDoc(collection(db, "orders"), order);

        orderRefPromise.then((docRef) => {
            setOrderId(docRef.id);

            const promises = cart.map((product) => {
                const productDocRef = doc(db, "products", product.id);
                return updateDoc(productDocRef, {
                    stock: increment(-product.quantity)
                });
            });

            Promise.all(promises).then(() => {
                handleDelete();
            });
        });
    };

    const email = watch("email");
    const confirmEmail = watch("confirmEmail");

    const isEmailValid = email === confirmEmail;


    if (orderId) {
        return (
            <div className="py-8 p-2">
                <h2 className="text-2xl font-semibold mb-4">¡Gracias por tu compra!</h2>
                <p className="text-lg">Tu id de pedido es: {orderId}</p>
            </div>
        );
    }

    return (
        <div className="py-8 p-2">
            <h1 className="text-3xl font-bold mb-6">Completa tus datos para finalizar</h1>
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
                    type="text"
                    placeholder="Confirma tu email"
                    {...register("confirmEmail")}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                {isEmailValid ? null : <p className="text-red-500">Los correos electrónicos no coinciden</p>}
                <input
                    type="number"
                    placeholder="Ingresa tu número de teléfono"
                    {...register("phone")}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                <div className="flex flex-row justify-center gap-3">
                    <button
                        type="submit"
                        disabled={!isEmailValid}
                        className={`bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ${!isEmailValid ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                        Comprar
                    </button>
                    <button onClick={() => navigate('/cart')} className="bg-yellow-600 hover:bg-yellow-800 text-white font-bold py-2 px-4 rounded">Volver al carrito</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;
