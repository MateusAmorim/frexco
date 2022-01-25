import styled from 'styled-components';

const FooterStyle = styled.footer`
  background-color: #87f;
  height: 6vh;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  @media only screen and (max-width: 1200px) {
    padding: 50px 0;
    height: auto;
  }
  @media only screen and (max-width: 600px) {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  @media only screen and (max-width: 400px) {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  p {
    color: #fff;
    font-family: 'Montserrat', sans-serif;
    font-size: 1.125rem;
    @media only screen and (max-width: 600px) {
      margin-left: 25px;
    }
    @media only screen and (max-width: 400px) {
      margin-left: 0;
      padding: 20px 0;
    }
  }
  a {
    font-weight: 600;
    font-size: 1rem;
    position: absolute;
    right: 25px;
    color: #fff;
    @media only screen and (max-width: 400px) {
      position: static;
      padding: 20px;
    }
  }
`;

export default FooterStyle;
