/*eslint-disable react/prop-types*/
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const showContent = () => {
        alert("Hola!")
    }

    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'grey', padding: '1rem' }}>{greeting}</h2>
            <button className="rounded-full btnItemList d-flex mx-auto" onClick={(showContent)}>Pulsar para saludar</button>
        </>

    )
}

export default ItemListContainer