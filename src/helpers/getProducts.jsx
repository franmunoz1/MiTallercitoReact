/* eslint-disable no-undef */
import data from "../json/data.json"

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        const item = data.find((prod) => prod.id === id)

        if (item) {
            resolve(item)
        } else {
            reject({
                error: "No se encontro el producto"
            })
        }
    })
}