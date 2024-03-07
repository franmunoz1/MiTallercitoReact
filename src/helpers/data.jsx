

export const getProducts = () => {
    return fetch('https://fakestoreapi.com/products?limit=10')
        .then(res => res.json())
        .then(json => json.result)
}