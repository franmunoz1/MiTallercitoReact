/* eslint-disable no-unused-vars */
import './App.css'
import Cart from './components/Cart/Cart'
import Error404 from './components/Error404/Error404'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/Navbar'
import Checkout from './components/Checkout/Checkout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartContext, CartProvider } from './context/CartContext'

function App() {

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/products' element={<ItemListContainer />} />
            <Route path='/category/:categoryName' element={<ItemListContainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='*' element={<Error404 />}></Route>
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
