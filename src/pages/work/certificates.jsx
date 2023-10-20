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



const Certificates = () => {
  const headerLinks = [
    { id: 1, url: '#certificates', text: 'Certificados' },
    { id: 2, url: 'home', text: 'Bienvenida' },
    { id: 3, url: 'work', text: 'Mi trabajo' },
    { id: 3, url: '#contact', text: 'Contacto' }
  ]

    const imageItems = [
      { id: 1, url: '/', title: 'Diseño Web Responsive', img: 'responsive.png' },
      { id: 2, url: '/', title: 'JavaScript', img: 'JsAlgorithms.png' },
      { id: 3, url: '/', title: 'Desarrollo Web', img: 'web.png' },
      { id: 4, url: '/', title: 'Control de Versiones', img: 'git.jpg' },
      { id: 5, url: '/', title: 'Paradigma PPO', img: 'objetos.png' },
      { id: 6, url: '/', title: 'Backend con Python', img: 'django.jpg' }, 
      { id: 7, url: '/', title: 'Python', img: 'python.png' },
      
      
      
    ]
  return (
    <PageStiled>
      <Header links={headerLinks}></Header>
      <SectionStyles id='certificates'>
        <Galery>
          <ImageItem links={imageItems}></ImageItem>  
        </Galery> 
      </SectionStyles>
      <Contact></Contact>
      <Footer></Footer>
    </PageStiled>
  );
}

export default Certificates;
