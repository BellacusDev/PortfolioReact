import React from 'react';
import Header from '../../components/container/header';
import Footer from '../../components/container/footer';
import Contact from '../../components/container/contact';
import { PageStiled } from '../../styles/CommonPages';



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
        {/* <div className='freecodecamp-logo-contenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freecodecamp' />
      </div> */}
        <div className='contenedor-calculadora'>
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClic={agregarInput} input={input}>1</Boton>
            <Boton manejarClic={agregarInput} input={input}>2</Boton>
            <Boton manejarClic={agregarInput} input={input}>3</Boton>
            <Boton manejarClic={agregarInput} input={input}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} input={input}>4</Boton>
            <Boton manejarClic={agregarInput} input={input}>5</Boton>
            <Boton manejarClic={agregarInput} input={input}>6</Boton>
            <Boton manejarClic={agregarInput} input={input}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} input={input}>7</Boton>
            <Boton manejarClic={agregarInput} input={input}>8</Boton>
            <Boton manejarClic={agregarInput} input={input}>9</Boton>
            <Boton manejarClic={agregarInput} input={input}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClic={agregarInput} input={input}>.</Boton>
            <Boton manejarClic={agregarInput} input={input}>0</Boton>
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={agregarInput} input={input}>/</Boton>
          </div>
          <div className='fila'>
            <BotonClear manejarClear={() => setInput('')}>
              Borrar
            </BotonClear>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </PageStiled>
  );
}

export default Calculadora;