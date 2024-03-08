/*eslint-disable react/prop-types*/
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProductByCategory } from '../../helpers/getProducts'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const { categoryName } = useParams();

    console.log(categoryName)

    useEffect(() => {
        getProductByCategory(categoryName)
            .then((res) => {
                setProducts(res)
            })

    }, [categoryName])


    return (
        <>
            <ItemList products={products} />
        </>

    )
}

export default ItemListContainer