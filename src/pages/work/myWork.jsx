import React from 'react';
import styled from 'styled-components';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import Contact from '../../components/container/contact';

/* Styles */
import { PageStiled, SectionStyles } from '../../styles/CommonPages'

import ImageItem from '../../components/pure/ImageItem';



const Galery = styled.div`
  
`;

const MyWork = () => {

  const headerLinks = [
    { id: 1, url: '/', text: 'Bienvenida' },
    { id: 2, url: '/work', text: 'Mi trabajo' },
    { id: 3, url: '/certificates', text: 'Certificados' },
    { id: 4, url: '/contact', text: 'Contacto' }  
  ]

  const imageItems = [
    { id: 1, url: '/public/portfolio.png', title: 'Portafolio', img: 'portfolio.png' },  
  ]

  return (
    <PageStiled>
      <Header links={headerLinks}></Header>
      <SectionStyles id='work'>
        <Galery>
          <ImageItem links={imageItems}></ImageItem>  
        </Galery>
      </SectionStyles>
      
      <Contact></Contact>
      <Footer></Footer>
    </PageStiled>
  );
}

export default MyWork;
