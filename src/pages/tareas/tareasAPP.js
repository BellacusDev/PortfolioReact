import '../../styles/tareasAPP.css';
import ListaDeTareas from '../../components/pure/ListaDeTareas';


function TareasAPP() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default TareasAPP;