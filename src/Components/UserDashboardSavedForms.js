import React from 'react';
import Site from './Site';
import Dashboard from './Dashboard';
import Header from './Header';
import '../Css/style.css'
export default function UserDashboardSavedForms() {
    return <div>
        <div className='container-fluid pt-4'>
            <div className='row'>
                <div className='col'>
                    <Header />
                </div>
            </div>
            <div className='row m-3'>
                <div className='col-3 pt-5'>
                    <Dashboard />
                </div>
                <div className='col-8 ms-5'>
                    <div className='at-form-info-Container'>
                        <div className='row'>
                            <div className='col  d-flex justify-content-center'>
                                <h3 className='text-white p-4'> Saved Forms</h3>
                            </div>
                        </div>
                        <div className='at-collect-Information'>
                            <div className='row pt-5 mx-3'>
                                <div className='col-6'>
                                    <p className='at-saved-paragraphs'>1.Personal Information Collection</p>
                                </div>
                                <div className='col-2'><button id='at-view-btn'>View Data</button></div>
                                <div className='col-2'><button  id='at-export-btn'>Export Data</button></div>
                                <div className='col-2'><button id='at-delete-btn'>Delete Form</button></div>
                                <hr />

                            </div>

                            <div className='row pt-3 mx-3'>
                                <div className='col-6'>
                                    <p className='at-saved-paragraphs'>2.Collect Customer Data</p>
                                </div>
                                <div className='col-2'><button id='at-view-btn'>View Data</button></div>
                                <div className='col-2'><button  id='at-export-btn'>Export Data</button></div>
                                <div className='col-2'><button id='at-delete-btn'>Delete Form</button></div>
                                <hr />
                            </div>

                            <div className='row pt-3 mx-3'>
                                <div className='col-6'>
                                    <p className='at-saved-paragraphs'>3.Collect Survey Data</p>
                                </div>
                                <div className='col-2'><button id='at-view-btn'>View Data</button></div>
                                <div className='col-2'><button id='at-export-btn'>Export Data</button></div>
                                <div className='col-2'><button id='at-delete-btn'>Delete Form</button></div>
                                <hr />
                            </div>

                            <div className='row py-3 mx-3'>
                                <div className='col-6'>
                                    <p className='text-white'>4.Job Application for Java Developer</p>
                                </div>
                                <div className='col-2'><button id='at-view-btn'>View Data</button></div>
                                <div className='col-2'><button id='at-export-btn'>Export Data</button></div>
                                <div className='col-2'><button id='at-delete-btn'>Delete Form</button></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Site />
        </div>

    </div>;
}
