import './ItemListContainer.css'

const ItemListContainer = ({ saludo }) => {

    const mostrarContenido = () => {
        alert("Hola!")
    }

    return (
        <>
            <h2 style={{ textAlign: 'center' }}>{saludo}</h2>
            <button className="btnItemList" onClick={(mostrarContenido)}>Pulsar para saludar</button>
        </>

    )
}

export default ItemListContainer