/*eslint-disable react/prop-types*/
import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import Item from '../Item/Item'
import './ItemListContainer.css'

const ItemListContainer = ({ greeting }) => {

    const products = [
        {
            id: 1,
            name: 'Earthen Bottle',
            category: 'Nene',
            href: '#',
            price: '$48',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
            imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
        },
        {
            id: 2,
            name: 'Nomad Tumbler',
            category: 'Nene',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
            imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
        },
        {
            id: 3,
            name: 'Focus Paper Refill',
            category: 'Adulto',
            href: '#',
            price: '$89',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
            imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
        },
        {
            id: 4,
            name: 'Machined Mechanical Pencil',
            category: 'Adulto',
            href: '#',
            price: '$35',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
            imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
        }
    ]

    const prod = new Promise((resolve) => setTimeout(() => {
        resolve(products)
    }, 3000));

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        prod.then(data => {
            setAllProducts(data)
        })
    })

    return (
        <>
            <h2 style={{ textAlign: 'center', color: 'grey', padding: '1rem' }}>{greeting}</h2>
            <ItemList products={allProducts} />
            <Item />
        </>

    )
}

export default ItemListContainer