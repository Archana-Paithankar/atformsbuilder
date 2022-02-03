import React from 'react';
import Routers from '../Routers/Routers';
import { Link } from 'react-router-dom'
import '../Css/Dashboard.css';
import Site from './Site';
export default function Dashboard() {
  return <div>
  
    <header>
      <nav className="navbar">
        <ul className="nav navbar-nav">
          <div className='m-0'>
            <li className="nav-item">
            <Link to=""><a className="nav-link text-dark " href="#"> My Dashboard </a></Link>
            </li>
          </div>
          <div className='m-0'>
            <li className="nav-item">
             <Link to="/userdashboardsavedforms"><a className="nav-link text-dark" href="#"> Saved Forms </a></Link> 
            </li>
          </div>
          <div className='m-0'>
            <li className="nav-item">
            <Link to="/userdashboardcreateform"><a className="nav-link text-dark" href="#"> Create Forms </a></Link>
            </li>
          </div>
          <div className='m-0'>
            <li className="nav-item">
              <Link to="/homepage"><a className="nav-link text-dark " href="#"> Log Out </a></Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>   
  </div>;
}
