import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.footer`
  width: 100%;
  font-size: 24px;
  display: flex;
  justify-content: space-evenly;
  padding: 0.5rem;
  background: gray;
  border-top: 4px solid tomato;
  margin-top: -140px;
  background-color: rgb(40,40,40);

  @media (max-width: 600px) {
  footer {
    flex-direction: column;
    text-align: center;
  }
`;

const PStyled = styled.p`
  margin: 2rem;
  color: white;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;


const Footer = () => {
  return (
    <FooterStyled>
      <PStyled>Este es mi Portafolio creado con React.</PStyled>
      <PStyled>
        &copy; BellacusDev<br/>
        Sergio Martínez Lara
      </PStyled>
    </FooterStyled>
  );
}

export default Footer;
