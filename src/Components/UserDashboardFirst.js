import React from 'react';
import Dashboard from './Dashboard';
export default function UserDashboardFirst() {
    return <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8'>
                    <img src='/image/logo.png' className="logoimg" alt='logo' />
                </div>
                <div className='col'>Welcome<strong>[Username]</strong></div>
                <div className='col text-danger'>Log Out</div>
            </div>
            <div className='row'>
                <div className='col d-flex justify-content-center m-5'>
                    <h4>WELCOME TO ATFORMS FORM BUILDER</h4>
                </div>
            </div>
            <div className='row'>
                <div className='col-4'>
                    <Dashboard />
                </div>
                <div className='col-8'>
                    <div className='col'>
                        <div className='part-2'>
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
        </div>
    </div>;
}
