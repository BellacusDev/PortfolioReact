import '../../styles/BotonCalculadora.css'


function BotonCalculadora(props) {

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };

  function salida() {
    console.log(props.input)

    // Verifica si se quiere intruducir un operador exitiendo otro o en pantalla vacia
    if ((esOperador(props.children) && (!props.input))
      || (esOperador(props.children) && props.input && esOperador(props.input[props.input.length - 1]))) {
      return;
    }

    // Verifica si se esta intentando introducir un punto existiendo otro
    if (props.children === '.' && props.input && props.input.includes('.')) {
      return;
    }


    return props.manejarClic(props.children)
  }

  return (
    <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={salida} >
      {props.children}
    </div>
  )
}

export default BotonCalculadora;