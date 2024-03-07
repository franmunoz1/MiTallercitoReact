import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Somos Mi Tallercito y nos dedicamos a la venta de muebles para niños y hogares'} />
      <ItemDetailContainer />

    </>
  )
}

export default App
