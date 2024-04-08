import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, doc, updateDoc, increment, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const [orderData, setOrderData] = useState(null);
    const { cart, handleDelete, totalPrice } = useContext(CartContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();

    useEffect(() => {
        const getOrderData = async () => {
            if (orderId) {
                const docRef = doc(db, "orders", orderId);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setOrderData(docSnap.data());
                } else {
                    console.log("No such document!");
                }
            }
        };
        getOrderData();
    }, [orderId]);

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

    if (orderData) {
        return (
            <div className="py-8 p-2">
                <h2 className="text-2xl font-semibold mb-4">¡Gracias por tu compra!</h2>
                <p className="text-lg">Tu id de pedido es: {orderId}</p>
                <h3 className="mt-6 mb-3 text-lg font-semibold">Productos comprados:</h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {orderData.products.map((product, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-md">
                            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-t-md" />
                            <div className="p-4">
                                <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                                <p className="text-gray-500 mb-2">Cantidad: {product.quantity}</p>
                                <p className="text-gray-500">Precio unitario: ${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="mt-6">Total de la orden: ${orderData.totalPrice}</p>
            </div>
        );
    }




    return (

        <div className="py-8 p-2">
            <h1 className="text-3xl font-bold mb-6">Completa tus datos para finalizar</h1>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cart.map((product, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-md">
                        <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-t-md" />
                        <div className="p-4">
                            <h4 className="text-lg font-semibold mb-2">{product.title}</h4>
                            <p className="text-gray-500 mb-2">Cantidad: {product.quantity}</p>
                            <p className="text-gray-500">Precio unitario: ${product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-6">
                <p className="text-lg font-semibold">Total de la orden: ${totalPrice()}</p>
            </div>

            <form onSubmit={handleSubmit(buy)} className="space-y-4">
                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    {...register("nombre", { required: true })}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                {errors.nombre && <p className="text-red-500">Este campo es requerido</p>}
                <input
                    type="text"
                    placeholder="Ingresa tu email"
                    {...register("email", { required: true })}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                {errors.email && <p className="text-red-500">Este campo es requerido</p>}
                <input
                    type="text"
                    placeholder="Confirma tu email"
                    {...register("confirmEmail", { required: true })}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                {errors.confirmEmail && <p className="text-red-500">Este campo es requerido</p>}
                {!isEmailValid && <p className="text-red-500">Los correos electrónicos no coinciden</p>}
                <input
                    type="number"
                    placeholder="Ingresa tu número de teléfono"
                    {...register("phone", { required: true })}
                    className="block w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"
                />
                {errors.phone && <p className="text-red-500">Este campo es requerido</p>}
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
