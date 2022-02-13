import React from 'react';
import '../Css/style.css'
import Dashboard from './Dashboard';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../Css/mediaQuary.css';
export default function Homepage() {
    return <div>
        <div className="container">
        <div className="row">
           <Header />
        </div>
        <div className="row">
            <div className="col-sm col-md col-lg col-xl col-xxl py-3 at-welcome-heading">
                <h3 className="text-uppercase text-center">welcome to atforms form builder</h3>
            </div>
        </div>
        <div className="row">
            <div className="col-sm col-md-3 col-lg-3 col-xl-3 col-xxl-3">
               <Dashboard />
            </div>
            <div className="col-sm col-md-9 col-lg-9 col-xl-9 col-xxl-9 ps-4 pt-2 at-login-instruction">
                <p className="mb-4">Please check you E-mail for E-mail Verification Link and click
                    to verify email and access your form builder dashboard.</p>
                <p>If you haven’t receive verification email please click to<br />
                  <Link to="/welcome"><a href="#"> Re-send E-mail</a></Link>
                </p>
            </div>
        </div>
    </div>
    </div>;
}
