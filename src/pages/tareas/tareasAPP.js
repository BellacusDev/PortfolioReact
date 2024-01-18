import '../../styles/tareasAPP.css';
import ListaDeTareas from '../../components/pure/ListaDeTareas';
import Footer from '../../components/container/footer';
import { PageStiled } from '../../styles/CommonPages';


function TareasAPP() {
  return (
    <PageStiled>
      <div className='aplicacion-tareas'>
        <div className='tareas-lista-principal'>
          <h1>Mis tareas</h1>
          <ListaDeTareas /> 
        </div>
        
      </div>
      <Footer></Footer>
    </PageStiled>
  );
}

export default TareasAPP;