import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateBlog from './components/pages/CreateBlog';
import Home from './components/pages/Home';
import SinglePage from './components/pages/SinglePage';
import UpdateBloge from './components/pages/UpdateBloge';

function App() {
  return (
    <div>
     
      
      <BrowserRouter>
      <Routes>
      
          <Route path='/' element={<Home />} />
          <Route path="/createblog" element={<CreateBlog />} />
          <Route path="/singleblog/:id" element={<SinglePage />} />
          <Route path="/updateblog/:id" element={<UpdateBloge />} />
          
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App