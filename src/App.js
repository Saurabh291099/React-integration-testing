import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';


import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-page" exact element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
