import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: #87f;
  height: 6vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  @media only screen and (max-width: 1200px) {
    padding: 50px 0;
    height: auto;
    flex-direction: column;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.125rem;
    color: #fff;
    @media only screen and (max-width: 1200px) {
      margin-bottom: 50px;
    }
  }
  a {
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default FooterStyle;
