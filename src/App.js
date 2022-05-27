import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Cart from './components/Cart';
import Home from './components/Home';
import Notfound from './components/Notfound';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
    <Routes>
    <Route path='/cart' element={<Cart/>} />
    <Route path='*'  element={<Notfound/>} />
    <Route index element={<Home/>}/>
    
    </Routes>
  </BrowserRouter>

    </div>
  );
}

export default App;
