import { Link } from 'react-router-dom';
import '../../styles/BotonClearCalculadora.css'

const BotonVolverCalculadora = (props) => (
    <Link className='boton-clear' onClick={props.manejarClear} to='/work'>
        {props.children}
    </Link>
);

export default BotonVolverCalculadora;