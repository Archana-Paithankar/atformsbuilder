import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function Welcome() {
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
                <div className="col-sm col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center">
                   <Dashboard />
                </div>
                <div className="col-sm col-md-9 col-lg-9 col-xl-9 col-xxl-9 ps-4 pt-2 at-login-instruction-2">
                    <p className="mb-4">Welcome [user name], you can create forms and share links
                        to collect user data.</p>
                    <Link to="/createform"> Click here to create your first form</Link>
                </div>
            </div>
        </div>
    </div>;
}
