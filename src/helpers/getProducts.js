/* eslint-disable no-undef */
import data from "../json/data.json"

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data)
        }, 1)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const item = data.find((prod) => prod.id === id)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: "No se encontro el producto"
                })
            }
        }, 2000)

    })
}

export const getProductByCategory = (category) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            let item = []

            if (!category) {

                item = getProducts()
                resolve(item)
                return
            }

            item = data.filter((prod) => prod.category === category)

            if (item) {
                resolve(item)
            } else {
                reject({
                    error: "No se encontro la categoria"
                })
            }
        }, 2000)


    })
}