import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
  min-height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .loading {
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      border-radius: 10px;
      background-color: #87f;
      margin: 4px;
      animation: dots 0.6s cubic-bezier(0.6, 0.1, 1, 0.4) infinite alternate;
      &:nth-child(1) {
        animation-delay: 0.1s;
      }
      &:nth-child(2) {
        animation-delay: 0.2s;
      }
      &:nth-child(3) {
        animation-delay: 0.3s;
      }
      &:nth-child(4) {
        animation-delay: 0.4s;
      }
      @keyframes dots {
        from {
          transform: translate3d(0, 0, 0);
        }
        to {
          transform: translate3d(0, 30px, 0);
        }
      }
    }
  }
`;

const Home = () => {
  const [alimentos, setAlimentos] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
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

  return (
    <HomeDiv>
      {loading ? (
        // <div className="loading">Carregando...</div>
        <div className="loading">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      ) : (
        alimentos && alimentos.map(({ name, id }) => <div key={id}>{name}</div>)
      )}
    </HomeDiv>
  );
};

export default Home;
