import React from 'react';

import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function Header() {
    return <div>
        <div className="container">
            <div className="row pt-3">
                <nav className="navbar navbar-light">
                    <div className="col-4 col-sm-5 col-md-6 col-lg-8 col-xl-8 col-xxl-8">
                   <Link to="/"><img src="./image/logo.png" className="img-fluid navbar-brand at-logo" alt="logo" /></Link>
                    </div>
                    <div className="col-8 col-sm-7 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <div className="row">
                            <div className="col-8 col-sm-7 col-md-8 col-lg-8 col-xl-8 col-xxl-7">
                                <h5 className="me-2 at-welcome">Welcome[username]</h5>
                            </div>
                            <div className="col-4 col-sm-5 col-md-4 col-lg-4 col-xl-4 col-xxl-5">
                              <Link to="/" className="at-logout-btn at-links">Log Out</Link> 
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        {/* <div classNameName='container-fluid'>
            <div classNameName='row pt-4'>
                <div classNameName='col-auto'>
                    <Link to="/"> <img src='/image/logo.png' classNameName="logoimg" alt='logo' /></Link>
                </div>
                <div classNameName='col-3 at-username float-right'><a href="">Welcome<strong>[User-name]</strong></a></div>
                <div classNameName='col-2 at-logout-btn float-right'>
                    <Link to="/">
                        <a href="">
                            <strong>Log Out</strong>
                        </a>
                    </Link>
                </div>
            </div>
        </div> */}
    </div>;
}
