import styled from 'styled-components';

const HeaderStyle = styled.header`
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  @media only screen and (max-width: 500px) {
    padding: 20px 0;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 8vh;
    .logo {
      h1 {
        font-size: 1.6rem;
        font-weight: 600;
        color: #87f;
      }
    }
    .carrinho {
      background-color: #87f;
      padding: 10px 15px;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-size: 1.2rem;
        font-weight: 600;
        color: #fff;
        margin-right: 5px;
      }
      span {
        margin-right: 5px;
        font-weight: 600;
        color: #fff;
        font-size: 1.4rem;
      }
    }
  }
`;

export default HeaderStyle;
