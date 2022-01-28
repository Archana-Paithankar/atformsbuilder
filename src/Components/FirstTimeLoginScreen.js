import React from 'react';
import '../Css/style.css'
import Dashboard from './Dashboard';
import Site from './Site';
export default function FirstTimeLoginScreen() {
    return <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='row'>
                    <div className='col-8'>
                        <img src='/image/logo.png' className="logoimg" alt='logo' />
                    </div>
                    <div className='col'>Welcome<strong>[Username]</strong></div>
                    <div className='col text-danger'>Log Out</div>
                </div>
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center m-5'>
                    <h4>WELCOME TO ATFORMS FORM BUILDER</h4>
                </div>
            </div>

            <div className='row'>
                <div className='col-4'>
                    {/* <Dashboard /> */}
                </div>
                <div className='col'>
                    <div className='part-2'>
                        <div className='mb-3'>
                            <p className='text-danger'>Please check you E-mail for E-mail Varification link and click to verify email and
                                access your form builder.
                            </p>
                        </div>
                        <div className='mb-3'>
                            <p className='text-danger'>If you haven't recieve Varification email Please click to <a href=''>Re-send E-mail</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>;
}
