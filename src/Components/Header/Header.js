import React from 'react';
import { Link } from 'react-router-dom';
import HeaderStyle from './Header.style';
import { UserContext } from '../UserContext';

const Header = () => {
  const { setProduto, carrinho } = React.useContext(UserContext);

  const cleanState = () => {
    setProduto({});
  };

  return (
    <HeaderStyle>
      <nav>
        <Link to="/" className="logo" onClick={cleanState}>
          <h1>Frexco</h1>
        </Link>
        <Link to="/Carrinho" className="carrinho">
          <h1>
            {carrinho.length > 0 && <span>{carrinho.length}</span>}Carrinho
          </h1>
        </Link>
      </nav>
    </HeaderStyle>
  );
};

export default Header;
