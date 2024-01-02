import React from 'react';
import logo from '../../media/logoReact.svg';
import styled from 'styled-components';
import '../../App.css';

const Div = styled.div`
`;

const PStyled = styled.p`
  font-size: 20px;
  color: #61DAFB;
  margin-top: -8px;
`;



const LogoReact = () => {
  return (
    <Div>
        <img src={logo} className="App-logo" alt="logo" />
        <PStyled>Creado con React</PStyled>
    </Div>
  );
}

export default LogoReact;
