import React from 'react';
import styled from 'styled-components';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import Contact from '../../components/container/contact';

/* Styles */
import { PageStiled, SectionStyles } from '../../styles/CommonPages'

import ImageItem from '../../components/pure/ImageItem';
//imagenes de certificados
import responsiveImage from '../../media/responsive.png';
import jsAlgorithmsImage from '../../media/JsAlgorithms.png';
import webImage from '../../media/web.png';
import gitImage from '../../media/git.jpg';
import objetosImage from '../../media/objetos.png';
import djangoImage from '../../media/django.jpg';
import pythonImage from '../../media/python.png';



const Galery = styled.div`
  
`;



const Certificates = () => {
  const headerLinks = [
    { id: 1, url: '/', text: 'Bienvenida' },
    { id: 2, url: '/work', text: 'Mi trabajo' },
    { id: 3, url: '/certificates', text: 'Certificados' },
    { id: 4, url: '/contact', text: 'Contacto' }  
  ]

    const imageItems = [
      { id: 1, url: '/public/responsive.png', title: 'Diseño Web Responsive', img: responsiveImage},
      { id: 2, url: '//public/JsAlgorithms.png', title: 'JavaScript', img: jsAlgorithmsImage },
      { id: 3, url: '/public/web.png', title: 'Desarrollo Web', img: webImage },
      { id: 4, url: '/public/git.jpg', title: 'Control de Versiones', img: gitImage },
      { id: 5, url: '/public/objetos.png', title: 'Paradigma PPO', img: objetosImage },
      { id: 6, url: '/public/django.jpg', title: 'Backend con Python', img: djangoImage }, 
      { id: 7, url: '/public/python.png', title: 'Python', img: pythonImage },
      
      
      
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
