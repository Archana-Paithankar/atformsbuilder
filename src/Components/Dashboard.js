import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function Dashboard() {
    return <div>

        <div className="container">
            {/* <div className="at-sidebar-2">
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler bg-dark collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                        aria-expanded="false" aria-label="Toggle navigation" onclick="myFunction()">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="text-dark w-100">
                    <ul className="nav flex-column">
                        <li className="nav-item mb-4 pt-5">
                            <a className="nav-link" href="#">My Dashboard</a>
                        </li>
                     <Link to="/savedforms" className='at-links'> <li className="nav-item">
                            <a className="nav-link mb-4" href="#">Saved Forms</a>
                        </li></Link>
                      <Link to="/createform" className='at-links'><li className="nav-item">
                            <a className="nav-link mb-4" href="#">Create Form</a>
                        </li></Link>  
                      <Link to="/" className='at-links'>  <li className="nav-item">
                            <a className="nav-link mb-4" href="#">Log Out</a>
                        </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div> */}
            <div className="col-sm col-md col-lg col-xl col-xxl">
                <ul className="nav flex-column">
                    <li className="nav-item mb-4 pt-5">
                        <a className="nav-link" href="#">My Dashboard</a>
                    </li>
                  <li className="nav-item">
                    <Link to="/savedforms" className="nav-link mb-4">Saved Forms</Link>
                    </li>
                   <li className="nav-item">
                        <Link to="/createform" className="nav-link mb-4">Create Form</Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/" className="nav-link mb-4">Log Out </Link>
                    </li>
                   
                </ul>
            </div>

        </div>
    </div>;
}
