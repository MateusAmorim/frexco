import React from 'react';
import SearchSvg from './SearchSvg';
import HomeStyle from './Home.style';
import { UserContext } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const { produto, setProduto } = React.useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (produto.index >= 0) {
      navigate(`/${produto.name}`);
    }
  }, [produto]);

  const puxarDados = async () => {
    setLoading(true);
    const dados = await fetch('https://api-frexco.herokuapp.com/');
    const dadosJson = await dados.json();
    setDados(dadosJson);
    setLoading(false);
  };

  React.useEffect(() => {
    puxarDados();
  }, []);

  return (
    <HomeStyle>
      {loading ? (
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        dados && (
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
              {dados.map(({ name, id, image, preco, nutritions }, index) => (
                <div className="container" key={id}>
                  <img src={image.src} alt={image.alt} />
                  <section>
                    <p>{preco}</p>
                    <h1>{name}</h1>
                    <button
                      onClick={() =>
                        setProduto({
                          index,
                          name,
                          id,
                          preco,
                          nutritions,
                          image,
                        })
                      }
                    >
                      Informações nutricionais
                    </button>
                  </section>
                </div>
              ))}
            </div>
          </div>
        )
      )}
    </HomeStyle>
  );
};

export default Home;
