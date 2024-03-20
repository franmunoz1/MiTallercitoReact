/*eslint-disable react/prop-types*/
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
// import { getProductByCategory } from '../../helpers/getProducts'
import { useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryName } = useParams();

    useEffect(() => {

        const productsRef = collection(db, "products");

        const queryCategory = categoryName ? query(productsRef, where("category", "==", categoryName)) : productsRef

        getDocs(queryCategory)
            .then((resp) => {

                setLoading(false)

                setProducts(
                    resp.docs.map((doc) => {
                        return { ...doc.data(), id: doc.id }
                    })
                )
            })

    }, [categoryName]);


    return (
        <>
            {loading ? <Loader /> : <ItemList products={products} />}
        </>

    )
}

export default ItemListContainer