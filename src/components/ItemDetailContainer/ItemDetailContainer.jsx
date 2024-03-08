/* eslint-disable react/prop-types */
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../helpers/getProducts"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const { id } = useParams()

    console.log(id)

    useEffect(() => {
        getProductById(Number(id))
            .then((res) => {
                setItem(res)
            })
    }, [id])

    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer