import '../../styles/BotonClearCalculadora.css'

const BotonClearCalculadora = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children}
    </div>
);

export default BotonClearCalculadora;