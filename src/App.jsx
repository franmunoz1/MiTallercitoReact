import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <ItemListContainer saludo='Bienvenidos a nuestro programa!' />

    </>
  )
}

export default App
