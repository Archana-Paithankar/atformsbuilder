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
          <div className='mb-4'>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#"> My Dashboard </a>
            </li>
          </div>
          <div className='mb-4'>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#"> Saved Forms </a>
            </li>
          </div>
          <div className='mb-4'>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#"> Create Forms </a>
            </li>
          </div>
          <div className='mb-4'>
            <li className="nav-item">
              <a className="nav-link text-dark px-3" href="#"> Log Out </a>
            </li>
          </div>
        </ul>
      </nav>
    </header>   
  </div>;
}
