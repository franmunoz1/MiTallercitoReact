/* eslint-disable react/prop-types */
const ItemDetail = ({ item }) => {
    return (
        <>
            <div className="container mx-auto p-4">
                <div className="flex">
                    <img src={item.image} alt={item.title} className="w-1/2" />

                    <div className="ml-4">
                        <h2 className="text-3xl font-bold">{item.title}</h2>
                        <p className="text-gray-600">Precio: ${item.price}</p>
                        <p className="text-gray-600">Stock disponible: {item.stock}</p>

                        <div className="mt-4">
                            <label htmlFor="quantity" className="mr-2">
                                Cantidad:
                            </label>
                            <select
                                id="quantity"
                                name="quantity"
                                value=''
                                onChange=''
                                className="border p-2"
                            >
                                {[...Array(item.stock).keys()].map((num) => (
                                    <option key={num + 1} defaultValue={num + 1}>
                                        {num + 1}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                            Agregar al carrito
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemDetail