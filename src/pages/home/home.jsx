import React from 'react';
import styled from 'styled-components';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';

/* material ui */
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

const PageStiled = styled.div`
  background-image: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
`;

const SectionStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  
`;

const DivStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 50px;
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

const H2Contact = styled.h2`
  color: white;
  font-size: 4rem;
`;

const LinkContact = styled.a`
  text-decoration: none;
  color: white;
  padding-right: 20px;
  font-size: 2rem;
`;

const FacebookIconStyled = styled(FacebookIcon)`
  color: white;
  font-size: 30px;
  margin-right: 2px;
  margin-top: -3px;
`;

const GitHubIconStyled = styled(GitHubIcon)`
  color: white;
  font-size: 30px;
  margin-right: 2px;
  margin-top: -3px;
  padding-left: 20px;
`;





const Home = () => {
  return (
    <PageStiled>
      <Header></Header>
      <SectionStyles id='wellcome'>
        <H1Styles>¡Hola!, me llamo <br/>Sergio Martínez Lara</H1Styles>
        <PStyles>Te invito a adentrarte en mi portafolio</PStyles>
      </SectionStyles>
      <SectionStyles id='contact'>
        <H2Contact>Trabajemos juntos...</H2Contact>
        <PStyles>Bellacus.Dev@gmail.com</PStyles>
        <DivStyled>
          <FacebookIconStyled sx={{ fontSize: 50 }}/>
          <LinkContact href='https://www.facebook.com/BellacusDev'>Facebook</LinkContact>
          <GitHubIconStyled sx={{ fontSize: 50 }}/>
          <LinkContact href='https://github.com/BellacusDev'>GitHub</LinkContact>
        </DivStyled>
      </SectionStyles>
      <Footer></Footer>
    </PageStiled>
  );
}

export default Home;
