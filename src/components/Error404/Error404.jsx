const Error404 = () => {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-2">404</h1>
                <p className="text-2xl font-semibold text-gray-800 mb-4">Página no encontrada</p>
                <p className="text-lg text-gray-600 mb-8">La página que estás buscando no existe o ha sido eliminada.</p>
                <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Volver a la página de inicio</a>
            </div>
        </div>
    )
}

export default Error404