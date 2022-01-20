import React from 'react';
import { Link } from 'react-router-dom';
import Carrinho from './CarrinhoSvg';
import HeaderDiv from './Header.style';

const Header = () => {
  return (
    <HeaderDiv>
      <nav>
        <Link to="/" className="logo">
          <h1>Frexco</h1>
        </Link>
        <Link to="/carrinho" className="carrinho">
          <h1>Carrinho</h1> <Carrinho />
        </Link>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
