import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Carrinho from './CarrinhoSvg';

const HeaderDiv = styled.header`
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
    .logo {
      h1 {
        font-size: 1.6rem;
        font-weight: 600;
        color: #87f;
      }
    }
    .carrinho {
      background-color: #87f;
      padding: 10px 15px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
        margin-right: 5px;
      }
    }
  }
`;

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
