import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Success from './Pages/Success/Success';
import './App.css'
import Menu from './components/Menu';

import About from './components/About';
import Navbar from './components/Navbar';

function App ()  {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='menu'element={<Menu/>}/>
          <Route path='about'element={<About/>}/>
          <Route path='navbar'element={<Navbar/>}/>
         

        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
