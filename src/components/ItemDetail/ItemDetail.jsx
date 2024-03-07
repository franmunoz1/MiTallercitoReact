/* eslint-disable react/prop-types */
const ItemDetail = ({ item }) => {
    return (
        <>
            <div>
                <h2>{item.title}</h2>
                <span>{item.price}</span>
            </div>

        </>
    )
}

export default ItemDetail