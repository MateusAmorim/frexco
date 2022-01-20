import React from 'react';
import CarrinhoStyle from './Carrinho.style';
import { UserContext } from '../UserContext';

const Carrinho = () => {
  const { carrinho } = React.useContext(UserContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <CarrinhoStyle>
      <div className="container">
        <h1>Carrinho</h1>
        {carrinho.length > 0 ? (
          <div className="carrinho">
            {carrinho &&
              carrinho.map((cart, index) => (
                <ul key={index}>
                  <li>Produto: {cart.name}</li>
                  <li>Quantidade: 0</li>
                  <li>Preço: {cart.preco}</li>
                </ul>
              ))}
          </div>
        ) : (
          <div className="nothing">
            <h2>Seu carrinho está vazio.</h2>
          </div>
        )}
      </div>
    </CarrinhoStyle>
  );
};

export default Carrinho;
