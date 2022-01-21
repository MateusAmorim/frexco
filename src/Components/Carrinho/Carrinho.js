import React from 'react';
import CarrinhoStyle from './Carrinho.style';
import { UserContext } from '../UserContext';
import CarrinhoSvg from './CarrinhoSvg';

const Carrinho = () => {
  const { carrinho } = React.useContext(UserContext);

  const handleRemove = () => {
    console.log('remover');
  };

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
                  <li>
                    Produto: <span>{cart.name}</span>
                  </li>
                  <li>
                    Quantidade: <button>+</button>
                    <span>0</span>
                    <button>-</button>
                  </li>
                  <li>
                    Preço: <span>{cart.preco}</span>
                  </li>
                  <li>
                    <CarrinhoSvg handleRemove={handleRemove} />
                  </li>
                </ul>
              ))}
            <div className="finalizar">
              <h1>Finalizar pedido</h1>
              <ul>
                <li>Total: R$: 00,00</li>
                <li>Quantidade: 0</li>
                <li>Limpar</li>
              </ul>
            </div>
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
