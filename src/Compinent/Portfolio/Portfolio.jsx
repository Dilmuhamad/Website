import React from 'react'; 
import '../../App.css'
import { Link, Routes, Route } from 'react-router-dom';
import { PortfolioContact } from './PortfolioMenu/PortfolioContact';
import { PortfolioAbout } from './PortfolioMenu/PortfolioAbout';
import { PortfolioSkills } from './PortfolioMenu/PortfolioSkills';

export const Portfolio=()=>{
    return(
  <div>

    <div className="Portfolio-menu">
      <Link to="/PortfolioAbout">About</Link> <br/> <br/>
      <Link to="/PortfolioSkills">Skills</Link>  <br/><br/>
      <Link to="/PortfolioContact">Contact</Link> <br/> <br/>
    </div>

    <Routes>
      <Route path='/PortfolioContact' element={<PortfolioContact />} />
      <Route path="/PortfolioAbout" element={<PortfolioAbout />} />
      <Route path="/PortfolioSkills" element={<PortfolioSkills />} />
    </Routes>

  </div>
    )
}