

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpdateUser from './component/UpdateUser';
import Users from './component/Users';
import CreateUser from './component/CreateUser';
import Header from './component/Header';
import Product from './component/Product';

function App() {
 
  return (
    <>
  <BrowserRouter>
    <Header/>
      <Routes>
          <Route path='/' element={<Users/>}/>
          <Route path='/create' element={<CreateUser/>}/>
          <Route path="/update/:id" element={<UpdateUser/>}/>
          <Route path="/product" element={<Product/>}/>
      </Routes>
  
  </BrowserRouter>
      
    </>
  )
}

export default App
