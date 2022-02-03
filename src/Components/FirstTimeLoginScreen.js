import React from 'react';
import '../Css/style.css'
import Dashboard from './Dashboard';
import Site from './Site';
import { Link } from 'react-router-dom';
import Header from './Header';
export default function FirstTimeLoginScreen() {
    return <div>
        <div className='container-fluid'>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <Header />
                    </div>
                </div>
                <div className='row'>
                    <div className='col d-flex justify-content-center m-5'>
                        <p className='at-welcome'>WELCOME TO ATFORMS FORM BUILDER</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-4'>
                        <Dashboard />
                    </div>
                    <div className='col-7'>
                        <div className='at-login-warning'>
                            <div className='mb-3'>
                                <p className=''>Please check you E-mail for E-mail Varification link and click to verify email and
                                    access your form builder.
                                </p>
                            </div>
                            <div className='mb-3'>
                                <p className=''>If you haven't recieve Varification email Please click to<Link to="/userdashboardfirsttime"> <a href=''>Re-send E-mail</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Site /> */}
            </div>
        </div>

    </div>;
}
