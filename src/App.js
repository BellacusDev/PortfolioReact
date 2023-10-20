import './App.css';
import { 
  BrowserRouter as Router, 
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
          <Route exact path='/' Component={Home}></Route>
          <Route exact path='/work' Component={MyWork}></Route>
          <Route exact path='/certificates' Component={Certificates}></Route>

          <Route exact path='/img' Component={ImageItem}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
