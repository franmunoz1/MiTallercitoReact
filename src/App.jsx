import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'Somos Mi Tallercito y nos dedicamos a la venta de muebles para niños y hogares'} />

    </>
  )
}

export default App
