import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: #87f;
  height: 6vh;
  position: relative;
  @media only screen and (max-width: 500px) {
    padding: 50px 0;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.125rem;
    color: #fff;
  }
  a {
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: 600;
    font-size: 1rem;
  }
`;

export default FooterStyle;
