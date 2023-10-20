import React from 'react';
import styled from 'styled-components';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import Contact from '../../components/container/contact';

/* Styles */
import { PageStiled, SectionStyles } from '../../styles/CommonPages';



const textStyles = `
  font-weight: 200;
  font-style: italic;
`;

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

  const headerLinks = [
    { id: 1, url: '#wellcome', text: 'Bienvenida' },
    { id: 2, url: 'work', text: 'Mi trabajo' },
    { id: 3, url: 'certificates', text: 'Certificados' },
    { id: 4, url: '#contact', text: 'Contacto' },
  ]

  return (
    <PageStiled>
      <Header links={headerLinks}></Header>
      <SectionStyles id='wellcome'>
        <H1Styles>¡Hola!, me llamo <br/>Sergio Martínez Lara</H1Styles>
        <PStyles>Te invito a adentrarte en mi portafolio</PStyles>
      </SectionStyles>
      <Contact></Contact>
      <Footer></Footer>
    </PageStiled>
  );
}

export default Home;
