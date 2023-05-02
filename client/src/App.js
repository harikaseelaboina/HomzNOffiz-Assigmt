import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import ManageProducts from './components/ManageProducts';

import PagenotFound from './components/Pagenotfound';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/manageproducts" element={<ManageProducts/>} />
        <Route path="*" element={<PagenotFound/>}  />

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

