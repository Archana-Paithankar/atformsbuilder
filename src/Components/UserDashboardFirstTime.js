import React from 'react';
import Dashboard from './Dashboard';
import Site from './Site';
export default function UserDashboardFirstTime() {
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
                <div className='col-8'>
                    <div className='col'>
                        <div className='at-login'>
                            <div className='mb-3'>
                                <p>Welcome [username], you can create forms and share links to collect user data.
                                </p>
                            </div>
                            <div className='mb-3'>
                                <p> <a href=''>Click here to create your first form</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Site />
        </div>
    </div>;
}
