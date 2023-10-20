import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Cambiar de 'flex-start' a 'center' para centrar horizontalmente */
  align-items: center; /* Agregar 'align-items: center' para centrar verticalmente */
  gap: 100px; /* Espaciado entre los elementos */
  margin-top: 200px;
  @media (max-width: 1494px) {
    margin-top: 200px;
  }
`;

const Img = styled.img`
    width: 400px;
    height: 280px;
    border-radius: 8px 8px 0 0;
`; 

const Title = styled.div`
  width: 400px;
  height: 80px;
  background-color: grey;
  border-radius: 0 0 8px 8px;
`;

const H1 = styled.h1`
  color: white;
  margin: 0;
`;

const ImageItem = ({ links }) => {
  return (
    <Div>
        { links.map((link) => (
          <div key={link.id}>
            <Img src={link.img} href={link.url} />
            <Title>
              <H1>{link.title}</H1>
            </Title>
          </div>
          )
        )}
    </Div>
    
  )
}

export default ImageItem;
