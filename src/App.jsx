import './App.css'
import { useState } from 'react'
import Cart from './components/Cart/Cart'
import Error404 from './components/Error404/Error404'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContext } from './context/CartContext'

function App() {

  const [cart, setCart] = useState([])

  return (
    <>
      <CartContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error404 />}></Route>
          </Routes>

        </BrowserRouter>
      </CartContext.Provider>
    </>
  )
}

export default App
