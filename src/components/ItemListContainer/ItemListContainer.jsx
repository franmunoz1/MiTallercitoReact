/*eslint-disable react/prop-types*/
import './ItemListContainer.css'

const ItemListContainer = ({ greet }) => {

    const showContent = () => {
        alert("Hola!")
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'grey' }}>{greet}</h2>
            <button className="rounded-full btnItemList d-flex mx-auto" onClick={(showContent)}>Pulsar simular carrito</button>
        </>

    )
}

export default ItemListContainer