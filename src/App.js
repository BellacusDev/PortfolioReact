import './App.css';
import {
  HashRouter as Router, // Cambiamos BrowserRouter por HashRouter
  Route,
  Routes,
} from 'react-router-dom';

/* pages */
import Home from './pages/home/home';
import MyWork from './pages/work/myWork';
import Certificates from './pages/work/certificates';
import ImageItem from './components/pure/ImageItem';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Cambiamos "Component" a "element" y quitamos "exact" */}
          <Route path="work" Component={MyWork} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="img" element={<ImageItem />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

