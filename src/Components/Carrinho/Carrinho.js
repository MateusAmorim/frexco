import React from 'react';
import CarrinhoStyle from './Carrinho.style';
import { UserContext } from '../UserContext';

const Carrinho = () => {
  const { carrinho, setCarrinho } = React.useContext(UserContext);
  const [total, setTotal] = React.useState(0);
  const [quantidade, setQuantidade] = React.useState(0);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deleteItem = (cart) => {
    const cartRemove = carrinho.filter((item) => item.name !== cart.name);
    setCarrinho(cartRemove);
  };

  const clearItem = () => {
    setCarrinho([]);
  };

  const precoTotal = () => {
    const precoLimpo = carrinho.map(
      (item) =>
        +item.preco.replace('R$', '').replace(':', '').replace(',', '.').trim(),
    );

    return Object.keys(precoLimpo).reduce(
      (sum, key) => sum + parseFloat(precoLimpo[key] || 0),
      0,
    );
  };

  const quantidadeTotal = () => {
    setQuantidade(0);
  };

  React.useEffect(() => {
    setTotal(precoTotal());
    quantidadeTotal();
  }, [carrinho]);

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
                    {/* <CarrinhoSvg handleRemove={() => cart.index === index && console.log('remover' + cart.index, index)} /> */}
                    {/* handleRemove={([...carrinho], carrinho.splice(index, 1))} */}
                    <svg
                      onClick={() => deleteItem(cart)}
                      width="20px"
                      height="20px"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="trash"
                      className="svg-inline--fa fa-trash fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#345"
                        d="M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
                      ></path>
                    </svg>
                  </li>
                </ul>
              ))}
            <div className="finalizar">
              <h1>Finalizar pedido</h1>
              <ul>
                <li>Total: R$: {total}</li>
                <li>Quantidade: {quantidade}</li>
                <li onClick={() => clearItem()}>Limpar</li>
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
