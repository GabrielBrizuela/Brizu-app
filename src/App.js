import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import ItemCount from './Components/ItemCount';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
   
    <div className='container-fluid fondo_oscuro'>
    <NavBar/>
    <Routes>
      <Route path='/' element={<ItemListContainer/>}/>
      <Route path='/category/:id' element={<ItemListContainer/>}/>
      <Route path='/item/:id' element={<ItemDetailContainer/>}/>

    </Routes>
    <hr/>
   
    <ItemCount stock={5} initial={1} onAdd={0}/>
    
    
    <Footer/>
    </div>
   
  );
}

export default App;
