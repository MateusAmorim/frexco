import React from 'react';
import styled from 'styled-components';

const FooterDiv = styled.footer`
  background-color: #87f;
  height: 6vh;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: 1.125rem;
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <FooterDiv>
      <p>Frexco. todos os diretos reservados.</p>
    </FooterDiv>
  );
};

export default Footer;
