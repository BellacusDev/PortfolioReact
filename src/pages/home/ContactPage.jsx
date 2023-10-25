import React from 'react';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import Contact from '../../components/container/contact';
import { PageStiled } from '../../styles/CommonPages';



const ContactPage = () => {

  const headerLinks = [
    { id: 1, url: '/', text: 'Bienvenida' },
    { id: 2, url: '/work', text: 'Mi trabajo' },
    { id: 3, url: '/certificates', text: 'Certificados' },
    { id: 4, url: '/contact', text: 'Contacto' }  
  ]

  return (
    <PageStiled>
      <Header links={headerLinks}></Header>
      <Contact></Contact>
      <Footer></Footer>
    </PageStiled>
  );
}

export default ContactPage;