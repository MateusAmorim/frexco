import styled from 'styled-components';

const CarrinhoStyle = styled.div`
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  .container {
    margin: 100px 0;
    min-width: 90vw;
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
        justify-content: space-evenly;
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
          font-weight: 600;
          min-width: 300px;
          button.quantidade {
            cursor: pointer;
            border: none;
            color: #fff;
            font-size: 1.275rem;
            margin: 0 5px;
            border-radius: 5px;
            background-color: #eee;
            color: #000;
            width: 25px;
            transition: 0.2s;
            &:hover {
              background-color: #ccc;
            }
          }
          &:last-child {
            min-width: auto;
            cursor: pointer;
          }
          span {
            color: #87f;
            font-weight: 600;
          }
          @media only screen and (max-width: 800px) {
            padding: 25px 50px;
          }
        }
      }
    }
    .finalizar {
      margin-top: 100px;
      h1 {
        margin-bottom: 20px;
      }
      span {
        color: #87e;
        &.limpar {
          background-color: #87e;
          cursor: pointer;
          color: #fff;
          border-radius: 5px;
          padding: 10px 20px;
          transition: all 0.2s;
          &:hover {
            transform: scale(1.1);
            position: relative;
            z-index: 1;
            background-color: #76f;
          }
        }
      }
    }
    .nothing {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
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
