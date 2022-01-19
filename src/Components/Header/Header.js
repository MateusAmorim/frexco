import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderDiv = styled.header`
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
    .logo {
      font-size: 1.6rem;
      font-weight: 600;
      color: #87f;
    }
    .carrinho {
      font-size: 1.2rem;
      font-weight: 600;
      background-color: #87f;
      color: #fff;
      padding: 10px 15px;
      border-radius: 5px;
    }
  }
`;

const Header = () => {
  return (
    <HeaderDiv>
      <nav>
        <Link to="/" className="logo">
          Frexco
        </Link>
        <Link to="/carrinho" className="carrinho">
          Carrinho
        </Link>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
