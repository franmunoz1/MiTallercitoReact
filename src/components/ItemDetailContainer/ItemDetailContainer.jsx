/* eslint-disable react/prop-types */
import ItemDetail from "../ItemDetail/ItemDetail"
// import { getProductById } from "../../helpers/getProducts"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Loader from "../Loader/Loader"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(true)

    const { id } = useParams()



    useEffect(() => {

        const docRef = doc(db, "products", id)
        getDoc(docRef)
            .then((resp) => {

                setLoading(false)

                setItem(
                    { ...resp.data(), id: resp.id }
                )
            })

    }, [id])

    return (
        <>
            {loading ? <Loader /> : item && <ItemDetail item={item} />}
        </>
    )
}

export default ItemDetailContainer