import React from 'react';
import styled, { StyledOptions } from 'styled-components';
import Header from '../../components/container/header';

const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #000;
  background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
`;

const textStyles = `
  font-weight: 200;
  font-style: italic;
`

const H1Styles = styled.h1`
  ${textStyles}
  font-size: 5rem;
  color: #be3144;

  @media (max-width: 991px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 1.8rem;
  }
`;


const PStyles = styled.p`
  ${textStyles}
  font-size: 3rem;
  color: white;

  @media (max-width: 991px) {
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;



const Home = () => {
  return (
    <div>
      <Header></Header>
      <SectionStyles id='wellcome'>
        <H1Styles>¡Hola!, me llamo <br/>Sergio Martínez Lara</H1Styles>
        <PStyles>Te invito a adentrarte en mi portafolio</PStyles>
      </SectionStyles>
      <SectionStyles id='contact'>

      </SectionStyles>
    </div>
  );
}

export default Home;
