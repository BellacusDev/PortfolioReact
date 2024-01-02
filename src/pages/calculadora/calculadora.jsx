import React from 'react';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import { PageStiled } from '../../styles/CommonPages';

import { useState } from 'react';
import { evaluate } from 'mathjs';

import BotonCalculadora from '../../components/pure/BotonCalculadora';
import BotonClearCalculadora from '../../components/pure/BotonClearCalculadora';
import PantallaCalculadora from '../../components/pure/PantallaCalculadora';

import '../../styles/calculadora.css'


const Calculadora = () => {

  const headerLinks = [
    { id: 1, url: '/', text: 'Bienvenida' },
    { id: 2, url: '/work', text: 'Mi trabajo' },
    { id: 3, url: '/certificates', text: 'Certificados' },
    { id: 4, url: '/contact', text: 'Contacto' }
  ]

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    }
  };

  return (
    <PageStiled>
      <Header links={headerLinks}></Header>
      <div className="App">
        <div className='contenedor-calculadora'>
          <PantallaCalculadora input={input} />
          <div className='fila'>
            <BotonCalculadora manejarClic={agregarInput} input={input}>1</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>2</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>3</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>+</BotonCalculadora>
          </div>
          <div className='fila'>
            <BotonCalculadora manejarClic={agregarInput} input={input}>4</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>5</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>6</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>-</BotonCalculadora>
          </div>
          <div className='fila'>
            <BotonCalculadora manejarClic={agregarInput} input={input}>7</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>8</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>9</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>*</BotonCalculadora>
          </div>
          <div className='fila'>
            <BotonCalculadora manejarClic={agregarInput} input={input}>.</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>0</BotonCalculadora>
            <BotonCalculadora manejarClic={calcularResultado}>=</BotonCalculadora>
            <BotonCalculadora manejarClic={agregarInput} input={input}>/</BotonCalculadora>
          </div>
          <div className='fila'>
            <BotonClearCalculadora manejarClear={() => setInput('')}>
              Borrar
            </BotonClearCalculadora>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </PageStiled>
  );
}

export default Calculadora;