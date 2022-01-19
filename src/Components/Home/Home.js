import React from 'react';
import styled from 'styled-components';

const HomeDiv = styled.div`
  min-height: 86vh;
  display: flex;
  align-items: flex-start;
  justify-content: start;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
  .alimentos {
    border: 1px solid red;
    background-color: #fafafa;
    height: 350px;
    width: 300px;
    margin: 20px;
    box-shadow: 0 4px 8px rgb(30 60 90 / 10%);
    border-radius: 5px;
    transition: all 0.2s;
    &:hover {
      box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
      transform: scale(1.1);
      position: relative;
      z-index: 1;
    }
  }
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 86vh;
    width: 100%;
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
        alimentos &&
        alimentos.map(({ name, id }) => (
          <div className="alimentos" key={id}>
            {name}
          </div>
        ))
      )}
    </HomeDiv>
  );
};

export default Home;
