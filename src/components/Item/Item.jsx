/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

const Item = ({ product }) => {

    const navigate = useNavigate()

    return (
        <article onClick={() => navigate(`/item/${product.id}`)} key={product.id} className="group cursor-pointer">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                    src={product?.image}
                    alt=""
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
        </article>
    )
}

export default Item