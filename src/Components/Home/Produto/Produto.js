import React from 'react';
import { UserContext } from '../../UserContext';
import ProdutoStyle from './Produto.style';
import CarrinhoSvg from './CarrinhoSvg';

const Produto = () => {
  const { produto, setProduto, carrinho, setCarrinho } =
    React.useContext(UserContext);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      setProduto({});
    };
  }, []);

  const handleAdd = () => {
    const productExist = carrinho.find((item) => item.id === produto.id);
    if (productExist) {
      setCarrinho(
        carrinho.map((item) =>
          item.id === produto.id
            ? { ...productExist, amount: productExist.amount + 1 }
            : item,
        ),
      );
    } else {
      setCarrinho([...carrinho, { ...produto, amount: 1 }]);
    }

    // setCarrinho([...carrinho, { ...produto, amount: 1 }]);
  };

  return (
    <ProdutoStyle>
      <div className="container">
        <div className="image">
          <img src={produto.image.src} alt={produto.image.alt} />
        </div>
        <div className="info">
          <h1>{produto.name}</h1>
          <p>
            A banana é uma fruta tropical rica em carboidratos, vitaminas e
            minerais que proporcionam diversos benefícios para a saúde, como
            garantir energia, aumentar a sensação de saciedade e de bem estar.
          </p>
          <p>
            Essa fruta é muito versátil, podendo ser consumida madura ou verde,
            e cujas propriedades podem variar, principalmente a nível digestivo.
            Essa fruta pode também ser consumida crua ou cozida, inteira ou
            amassada e utilizada na preparação de pratos doces ou em saladas.
          </p>
          <ul>
            <li>
              Calorias: <span>{produto.nutritions.calories}kcal</span>
            </li>
            <li>
              Carboidratos: <span>{produto.nutritions.carbohydrates}g</span>
            </li>
            <li>
              Gordura: <span>{produto.nutritions.fat}g</span>
            </li>
            <li>
              Proteina: <span>{produto.nutritions.protein}g</span>
            </li>
            <li>
              Açucar: <span>{produto.nutritions.sugar}g</span>
            </li>
          </ul>
          <h2>{produto.preco}</h2>
          <button onClick={handleAdd}>
            Adicionar
            <CarrinhoSvg />
          </button>
        </div>
      </div>
    </ProdutoStyle>
  );
};

export default Produto;
