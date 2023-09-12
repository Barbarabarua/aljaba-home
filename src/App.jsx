import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart.jsx'


const App = () => {


  return ( 
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route exact patch='/' element={<ItemListContainer/>}/>
        <Route exact patch='/cart' element={<Cart/>}/>
        <Route exact patch='/categoria/:id' element={<ItemListContainer/>}/>
        <Route exact patch='/item/:id' element={<ItemDetailContainer/>}/>

    {/*<ItemListContainer greeting={"Bienvenido a la tienda online de Aljaba Home."}/>
    */}
    </Routes>
    
    </BrowserRouter>
  )
}

export default App