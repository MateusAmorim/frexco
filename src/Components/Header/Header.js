import React from 'react';
import { Link } from 'react-router-dom';
import Carrinho from './CarrinhoSvg';
import HeaderDiv from './Header.style';
import { UserContext } from '../UserContext';

const Header = () => {
  const { produto, setProduto } = React.useContext(UserContext);
  const cleanState = () => {
    setProduto({});
  };

  return (
    <HeaderDiv>
      <nav>
        <Link to="/" className="logo" onClick={cleanState}>
          <h1>Frexco</h1>
        </Link>
        <Link to="/Carrinho" className="carrinho">
          <h1>
            <span>0</span>Carrinho
          </h1>
          <Carrinho />
        </Link>
      </nav>
    </HeaderDiv>
  );
};

export default Header;
