import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Cart from './pages/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/store' exact element={<Store />}></Route>
          <Route path='/about' exact element={<About />}></Route>
          <Route path='/cart' exact element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
