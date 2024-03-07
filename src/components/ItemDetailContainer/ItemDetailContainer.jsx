/* eslint-disable react/prop-types */
import ItemDetail from "../ItemDetail/ItemDetail"
import { getProductById } from "../../helpers/getProducts"
import { useState, useEffect } from "react"

const ItemDetailContainer = ({ itemId }) => {

    const [item, setItem] = useState(null)

    useEffect(() => {
        getProductById(itemId)
            .then((res) => {
                setItem(res)
            })
    }, [])


    return (
        <>
            {item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer