import { CartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config"

const Checkout = () => {

    const [orderId, setOrderId] = useState("");

    const { cart, handleDelete, totalPrice } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const buy = (data) => {
        const order = {
            client: data,
            products: cart,
            totalPrice: totalPrice()
        }

        const orderRef = collection(db, "orders")

        addDoc(orderRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                handleDelete();
            })
    }

    if (orderId) {
        return (
            <div>
                <h2>Gracias por tu compra!</h2>
                <p>Tu id de pedido es: {orderId}</p>
            </div>
        )
    }

    return (
        <div>
            <h1>Finalizar compra</h1>
            <form onSubmit={handleSubmit(buy)}>
                <input type="text" placeholder="Ingresa tu nombre" {...register("nombre")} />
                <input type="text" placeholder="Ingresa tu email" {...register("email")} />
                <input type="number" placeholder="Ingresa tu numero de telefono" {...register("phone")} />
                <button className="buy" type="submit">Comprar</button>
            </form>
        </div>
    )
}

export default Checkout