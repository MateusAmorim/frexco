import styled from 'styled-components';

const ProdutoStyle = styled.section`
  min-height: 94vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  .container {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    border-radius: 5px;
    padding: 5px;
    background-color: #fff;
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
    .image {
      margin-right: 5px;
      @media only screen and (max-width: 850px) {
        margin-bottom: 50px;
        margin-right: 0px;
      }
      img {
        width: 430px;
        height: 606px;
        border-radius: 5px;
        @media only screen and (max-width: 465px) {
          width: 330px;
          height: 500px;
        }
      }
    }
    .info {
      margin-left: 5px;
      width: 400px;
      height: 610px;
      @media only screen and (max-width: 465px) {
        width: 100%;
        height: auto;
        margin-left: 0px;
        margin: 5px;
      }
      h1 {
        color: #e80;
        font-size: 1.6rem;
        font-weight: 600;
        margin-bottom: 10px;
      }
      p {
        font-size: 1.125rem;
        line-height: ${1.125 * 1.5 + 'rem'};
        & + p {
          margin-bottom: 10px;
        }
      }
      ul {
        margin-bottom: 10px;
        li {
          font-size: 1.2rem;
          line-height: ${1.2 * 1.5 + 'rem'};
          display: flex;
          align-items: center;
          justify-content: start;
          span {
            font-weight: 600;
            margin-left: 5px;
            color: #87f;
          }
          &::before {
            content: '';
            display: inline-block;
            margin-right: 10px;
            border-radius: 5px;
            width: 5px;
            height: 5px;
            background-color: #333;
          }
        }
      }
      h2 {
        font-size: 1.4rem;
        color: #87f;
        font-weight: 600;
        margin-bottom: 10px;
      }
      button {
        background-color: #87f;
        color: #fff;
        font-size: 1.125rem;
        font-weight: 600;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        transition: all 0.2s;
        &:hover {
          transform: scale(1.1);
          position: relative;
          z-index: 1;
          background-color: #76f;
        }
        svg {
          margin-left: 5px;
        }
      }
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

export default ProdutoStyle;
