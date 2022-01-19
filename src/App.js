import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Carrinho from './Components/Carrinho/Carrinho';
import Footer from './Components/Footer/Footer';
import './Default.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
