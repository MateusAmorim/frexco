import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Carrinho from './Components/Carrinho/Carrinho';
import Footer from './Components/Footer/Footer';
import Produto from './Components/Home/Produto/Produto';
import './Default.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserContext } from './Components/UserContext';

function App() {
  const { produto } = React.useContext(UserContext);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Carrinho" element={<Carrinho />} />
          <Route path={`/${produto.name}`} element={<Produto />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
