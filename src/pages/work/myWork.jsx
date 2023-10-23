import React from 'react';
import styled from 'styled-components';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import Contact from '../../components/container/contact';

/* Styles */
import { PageStiled, SectionStyles } from '../../styles/CommonPages'



const MyWork = () => {

  const headerLinks = [
    { id: 1, url: '#work', text: 'Mi trabajo' },
    { id: 2, url: '#/', text: 'Bienvenida' },
    { id: 3, url: '#/certificates', text: 'certificados' },
    { id: 3, url: '#contact', text: 'Contacto' }
  ]

  return (
    <PageStiled>
      <Header links={headerLinks}></Header>
      <SectionStyles id='work'></SectionStyles>
      <Contact></Contact>
      <Footer></Footer>
    </PageStiled>
  );
}

export default MyWork;
