import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ManageProducts from './components/ManageProducts';

import PagenotFound from './components/Pagenotfound';
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/manageproducts" element={<ManageProducts/>} />
        <Route path="*" element={<PagenotFound/>}  />
        <Route path="/register"element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

