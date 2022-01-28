import React from 'react';
import '../Css/style.css'
import Dashboard from './Dashboard';
import Site from './Site';
export default function FirstTimeLoginScreen() {
    return <div>
        <div className='container-fluid'>
                <div className='row pt-4'>
                    <div className='col-8'>
                        <img src='/image/logo.png' className="logoimg" alt='logo' />
                    </div>
                    <div className='col pe-0'>Welcome<strong>[Username]</strong></div>
                    <div className='col text-danger ps-0'><strong>Log Out</strong></div>
                </div>
            <div className='row'>
                <div className='col d-flex justify-content-center m-5'>
                    <p className='at-welcome'>WELCOME TO ATFORMS FORM BUILDER</p>
                </div>
            </div>

            <div className='row'>
                <div className='col-3'>
                    <Dashboard />
                </div>
                <div className='col'>
                    <div className='at-login-warning'>
                        <div className='mb-3'>
                            <p className=''>Please check you E-mail for E-mail Varification link and click to verify email and
                                access your form builder.
                            </p>
                        </div>
                        <div className='mb-3'>
                            <p className=''>If you haven't recieve Varification email Please click to <a href=''>Re-send E-mail</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <Site />
        </div>

    </div>;
}
