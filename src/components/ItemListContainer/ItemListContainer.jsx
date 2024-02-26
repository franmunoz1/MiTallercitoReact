import './ItemListContainer.css'

const ItemListContainer = () => {

    const mostrarContenido = () => {
        alert("Hola!")
    }

    return (
        <>
            <button className="btnItemList" onClick={(mostrarContenido)}>Pulsar para revelar</button>
        </>

    )
}

export default ItemListContainer