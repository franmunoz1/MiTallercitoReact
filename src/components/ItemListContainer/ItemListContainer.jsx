/*eslint-disable react/prop-types*/
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { getProductByCategory } from '../../helpers/getProducts'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryName } = useParams();

    console.log(categoryName)

    useEffect(() => {
        setLoading(true);
        getProductByCategory(categoryName)
            .then((res) => {
                setProducts(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [categoryName]);


    return (
        <>
            {loading ? <Loader /> : <ItemList products={products} />}
        </>

    )
}

export default ItemListContainer