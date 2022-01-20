import React from 'react';
import { UserContext } from '../../UserContext';
import ProdutoDiv from './Produto.style';

const Produto = () => {
  const { produto } = React.useContext(UserContext);

  return (
    <ProdutoDiv>
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
            <li>Calories: {produto.nutritions.calories}</li>
            <li>Carbohydrates: {produto.nutritions.carbohydrates}</li>
            <li>Fat: {produto.nutritions.fat}</li>
            <li>Protein: {produto.nutritions.protein}</li>
            <li>Sugar: {produto.nutritions.sugar}</li>
          </ul>
          <h2>Price: {produto.preco}</h2>
        </div>
      </div>
    </ProdutoDiv>
  );
};

export default Produto;
