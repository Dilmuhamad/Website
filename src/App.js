import React from 'react';
import './App.css';
import { Mailer } from './Compinent/Mailer/Mailer';
import { Routes, Route, Link } from 'react-router-dom';
import { Pagoda } from './Compinent/Route/Pagoda';
import { Home } from './Compinent/Route/Home';
import { Portfolio } from './Compinent/Portfolio/Portfolio';

function App() {
 
  
  return (
    <div className="App" >

    <div className='menu'>
      <Link to="/">Home</Link> <br/> <br/>
      <Link to="/Pagoda">Pagoda</Link> <br/> <br/>
      <Link to="/Mailer">Mailer</Link>  <br/><br/>
      <Link to="/Portfolio">Portfolio</Link>
    </div>

      <Routes>
        <Route path='/Portfolio' element={<Portfolio/>} />
        <Route path="/" element={<Home />} />
        <Route path="/Pagoda" element={<Pagoda />} />
        <Route path="/Mailer" element={<Mailer />} />
      </Routes>
      
      </div>
  );
}

export default App;
