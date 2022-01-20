import React from 'react';
import SearchSvg from './SearchSvg';
import HomeDiv from './Home.style';

const Home = () => {
  const [alimentos, setAlimentos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [carrinho, setCarrinho] = React.useState({});

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
              {alimentos.map(({ name, id, image }) => (
                <div className="container" key={id}>
                  <img src={image.src} alt={image.alt} />
                  <ul>
                    <li>
                      <p>{`R$: ${Math.floor(Math.random() * (6 - 2 + 1)) + 2},${
                        Math.floor(Math.random() * (99 - 10 + 1)) + 10
                      }`}</p>
                    </li>
                    <li>
                      <h1>{name}</h1>
                    </li>
                    <li>
                      <button
                        onClick={() => setCarrinho({ ...carrinho, [id]: name })}
                      >
                        Adicionar
                      </button>
                    </li>
                  </ul>
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
