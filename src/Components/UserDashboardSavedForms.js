import React from 'react';
import Site from './Site';
import Dashboard from './Dashboard';
export default function UserDashboardSavedForms() {
  return <div>
 <div className='container-fluid pt-4'>
            <div className='row'>
                <div className='col-8'>
                    <img src='/image/logo.png' className="logoimg" alt='logo' />
                </div>
                <div className='col pe-0'>Welcome<strong>[Username]</strong></div>
                <div className='col text-danger ps-0'><strong>Log Out</strong></div>
            </div>
            <div className='row m-5'>
                <div className='col-3 pt-5'>
                    <Dashboard />
                </div>
                <div className='col-6'>
                    <div className='at-form-info-Container'>
                        <div className='row'>
                            <div className='col  d-flex justify-content-center'>
                                <h3 className='text-white p-4'> Saved Form</h3>
                            </div>
                        </div>
                        <div className='at-collect-Information'>
                            <div className='row'>
                                <div className='col px-5 pt-3 mb-3'>
                                    <p className='at-saved-paragraphs pb-3'>1.Personal Information Collection</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col px-5 mb-3'>
                                    <p className='at-saved-paragraphs pb-3'>2.Collect Customer Data</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col px-5 mb-3'>
                                    <p className='at-saved-paragraphs pb-3'>3.Collect Survey Data</p>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col px-5 mb-5'>
                                    <p className='text-white pb-3'>4.Job Application for Java Developer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Site />
        </div>

  </div>;
}
