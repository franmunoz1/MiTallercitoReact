import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import { Navbar } from './components/Navbar/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <ItemListContainer />
      <ItemDetailContainer itemId={1} />

    </>
  )
}

export default App
