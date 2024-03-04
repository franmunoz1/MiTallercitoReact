/*eslint-disable react/prop-types*/
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'grey', padding: '1rem' }}>{greeting}</h2>
            <ItemList />
            <Item />
        </>

    )
}

export default ItemListContainer