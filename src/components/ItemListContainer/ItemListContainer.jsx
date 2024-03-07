/*eslint-disable react/prop-types*/
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'
import './ItemListContainer.css'
import { getProducts } from '../../helpers/getProducts'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    console.log(products)

    useEffect(() => {
        getProducts()
            .then((res) => {
                setProducts(res)
            })

    }, [])


    return (
        <>
            <ItemList products={products} />
            <Item />
        </>

    )
}

export default ItemListContainer