import styled from 'styled-components';

const HeaderStyle = styled.header`
  position: fixed;
  z-index: 9999;
  width: 100vw;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
  @media only screen and (max-width: 500px) {
    padding: 10px 0;
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
      transition: all 0.2s;
      &:hover {
        transform: scale(1.1);
        position: relative;
        z-index: 1;
        background-color: #76f;
      }
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
