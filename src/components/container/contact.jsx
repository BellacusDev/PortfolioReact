import React from 'react';
import styled from 'styled-components';

/* Styles */
import { SectionStyles } from '../../styles/CommonPages';
import SocialMediaComponents from '../pure/SocialMediaComponents';


const textStyles = `
  font-weight: 200;
  font-style: italic;
`;

const H2Contact = styled.h2`
  color: white;
  font-size: 4rem;
  @media (max-width: 991px) {
    font-size: 3rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
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

const Contact = () => {
  return (
    <SectionStyles id='contact'>
      <H2Contact>Trabajemos juntos...</H2Contact>
      <PStyles>Bellacus.Dev@gmail.com</PStyles>
      <SocialMediaComponents></SocialMediaComponents>
    </SectionStyles>
  );
}

export default Contact;
