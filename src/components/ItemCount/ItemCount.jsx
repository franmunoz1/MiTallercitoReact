import { useContext } from "react"
import { CartContext } from '../../context/CartContext';

const ItemCount = () => {

    const { quantityCart } = useContext(CartContext);

    return (
        <div>
            <p>{quantityCart()}</p>
        </div>
    )
}

export default ItemCount;
