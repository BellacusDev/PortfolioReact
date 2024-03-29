import React from 'react';
import styled from 'styled-components';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import Contact from '../../components/container/contact';

/* Styles */
import { PageStiled, SectionStyles } from '../../styles/CommonPages'
import ImageItem from '../../components/pure/ImageItem';

// imagenes
import portafolioImagen from '../../media/portfolio.png';
import calculadoraImagen from '../../media/calculadoraReact.png';
import tareasAPPimagen from '../../media/tareasAPP.png'



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
    { id: 1, url: '/calculadora', title: 'Calculadora', img: calculadoraImagen },
    { id: 2, url: '/tareas', title: 'Aplicacion de Tareas', img: tareasAPPimagen },
    { id: 3, url: 'portfolio.png', title: 'Portafolio', img: portafolioImagen },  
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
