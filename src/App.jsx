import ItemListContainer from './components/ItemListContainer.jsx'
import Navbar from './components/Navbar.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting={"Bienvenido a la tienda online de Aljaba Home."}/>
    </>
  )
}

export default App