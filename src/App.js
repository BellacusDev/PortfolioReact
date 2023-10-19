import './App.css';
import { 
  BrowserRouter as Router, Route, Routes, Navigate
 } from 'react-router-dom';
import Home from './pages/home/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' Component={Home}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
