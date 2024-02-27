/*eslint-disable react/prop-types*/
import './ItemListContainer.css'

const ItemListContainer = ({ greet }) => {

    const showContent = () => {
        alert("Hola!")
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'red' }}>{greet}</h2>
            <button className="btnItemList" onClick={(showContent)}>Pulsar para saludar</button>
        </>

    )
}

export default ItemListContainer