import React from 'react';
import SearchSvg from './SearchSvg';
import HomeDiv from './Home.style';
import { GlobalContext } from '../Context/CarrinhoContext';

const Home = () => {
  const [alimentos, setAlimentos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { carrinho, setCarrinho } = React.useContext(GlobalContext);

  console.log(carrinho);

  const puxarDados = async () => {
    setLoading(true);
    const dados = await fetch('https://api-frexco.herokuapp.com/');
    const dadosJson = await dados.json();
    setAlimentos(dadosJson);
    setLoading(false);
  };

  React.useEffect(() => {
    puxarDados();
  }, []);

  return (
    <HomeDiv>
      {loading ? (
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        alimentos && (
          <div className="listagem">
            <div className="search">
              <label htmlFor="">Produtos</label>
              <form>
                <input type="text" placeholder="Buscar..." />
                <button>
                  <SearchSvg />
                </button>
              </form>
            </div>
            <div className="produtos">
              {alimentos.map(({ name, id, image, preco }, index) => (
                <div className="container" key={id}>
                  <img src={image.src} alt={image.alt} />
                  <section>
                    <p>{preco}</p>
                    <h1>{name}</h1>
                    <button
                      onClick={() =>
                        setCarrinho({ ...carrinho, id, name, preco, index })
                      }
                    >
                      Adicionar
                    </button>
                  </section>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </HomeDiv>
  );
};

export default Home;
