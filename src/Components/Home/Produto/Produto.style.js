import styled from 'styled-components';

const ProdutoDiv = styled.section`
  min-height: 86vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
    border-radius: 5px;
    padding: 5px;
    border: 1px solid red;
    .image {
      height: 650px;
      width: 400px;
      margin-right: 5px;
      img {
        height: 650px;
        width: 400px;
        border-radius: 5px;
      }
    }
    .info {
      width: 25%;
      border: 1px solid red;
      margin-left: 5px;
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
      }
    }
  }
`;

export default ProdutoDiv;
