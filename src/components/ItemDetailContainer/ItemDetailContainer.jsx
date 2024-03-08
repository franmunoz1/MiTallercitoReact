/* eslint-disable react/prop-types */
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../helpers/getProducts"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(true)

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        getProductById(Number(id))
            .then((res) => {
                setItem(res)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [id])

    return (
        <>
            {loading ? <Loader /> : item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer