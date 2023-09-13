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
        <Route exact path='/' element={<ItemListContainer/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/categoria/:id' element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>

    {/*<ItemListContainer greeting={"Bienvenido a la tienda online de Aljaba Home."}/>
    */}
    </Routes>
    
    </BrowserRouter>
  )
}

export default App