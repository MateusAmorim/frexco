import React from 'react';
import SearchSvg from './SearchSvg';
import HomeDiv from './Home.style';

const Home = () => {
  const [alimentos, setAlimentos] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const puxarDados = async () => {
    setLoading(true);
    const dados = await fetch('https://api-frexco.herokuapp.com/');
    const dadosJson = await dados.json();
    setAlimentos(dadosJson);
    console.log(dadosJson);
    setLoading(false);
  };

  React.useEffect(() => {
    puxarDados();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('buscar');
  };

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
              <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder="Buscar..." />
                <button>
                  <SearchSvg />{' '}
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
                      <button>Adicionar</button>
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
