import './App.css';
import {
  Route,
  Routes,
} from 'react-router-dom';

/* pages */
import Home from './pages/home/home';
import MyWork from './pages/work/myWork';
import Certificates from './pages/work/certificates';
import ContactPage from './pages/home/ContactPage';
import ImageItem from './components/pure/ImageItem';
import Calculadora from './pages/calculadora/calculadora.jsx'
import TareasAPP from './pages/tareas/tareasAPP.js';

function App() {
  return (
        <Routes>
          <Route path="/" element={<Home />} /> {/* Cambiamos "Component" a "element" y quitamos "exact" */}
          <Route path="work" element={<MyWork />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="img" element={<ImageItem />} />
          <Route path="calculadora" element={<Calculadora />} />
          <Route path="tareas" element={<TareasAPP />} />
        </Routes>
  );
}

export default App;
