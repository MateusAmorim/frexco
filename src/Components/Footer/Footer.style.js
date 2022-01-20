import styled from 'styled-components';

const FooterDiv = styled.footer`
  background-color: #87f;
  height: 6vh;
  @media only screen and (max-width: 500px) {
    padding: 20px 0;
  }
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.125rem;
    color: #fff;
  }
`;

export default FooterDiv;
