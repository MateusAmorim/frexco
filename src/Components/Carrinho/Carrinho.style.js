import styled from 'styled-components';

const CarrinhoStyle = styled.div`
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .container {
    margin: 100px 0 50px 0;
    @media only screen and (max-width: 800px) {
      margin: 125px 0;
    }
    h1 {
      color: #e80;
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
    }
    .carrinho {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      ul {
        box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
        font-size: 1.2rem;
        line-height: ${1.2 * 1.5};
        border-radius: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        background-color: #fff;
        animation: enter 0.3s;
        & + ul {
          margin-top: 10px;
        }
        @media only screen and (max-width: 800px) {
          flex-direction: column;
          & + ul {
            margin-top: 20px;
          }
        }
        li {
          padding: 20px 50px;
          @media only screen and (max-width: 800px) {
            padding: 25px 50px;
          }
        }
      }
    }
    .nothing {
      h2 {
        margin-top: 50px;
        font-size: 1.4rem;
      }
      animation: enter 0.3s;
      @keyframes enter {
        from {
          opacity: 0;
          transform: translate3d(0, -20px, 0);
        }
        to {
          opacity: initial;
          transform: initial;
        }
      }
    }
  }
`;

export default CarrinhoStyle;
