const ItemDetail = () => {
    return (
        <>
            <div className="grid grid-rows-2">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div>
                        <img src="https://res.cloudinary.com/dotaebdx8/image/upload/v1664993641/ecommerceReact/placadevideo1_sykrbv.jpg" alt="" />
                    </div>
                    <div>
                        <div>
                            <h2>Mueble para niño</h2>
                            <h2>$35000</h2>
                            <hr />
                            <h3>Medidas: </h3>
                            <p>Alto</p>
                            <p>Ancho</p>
                            <p>Profundidad</p>
                        </div>
                        <div>
                            <p>Stock disponible: </p>
                            <select />
                            <button>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Descripcion del Producto</p>
                </div>
            </div>

        </>
    )
}

export default ItemDetail