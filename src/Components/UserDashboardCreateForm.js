import React from 'react';
import Dashboard from '../Components/Dashboard'
import Site from '../Components/Site'
import Header from './Header';
export default function UserDashboardCreateForm() {
    return <div>
        <div className='container-fluid pt-4'>
            
                <div className='row'>
                    <div className='col'>
                        <Header />
                       </div>
                </div>
                <div className='row m-5'>
                    <div className='col-3 pt-5'>
                        <Dashboard />
                    </div>
                    <div className='col-7'>
                        <div className='at-form-info-Container'>
                            <div className='row'>
                                <div className='col  d-flex justify-content-center'>
                                    <h3 className='text-white p-4'> CREATE FORM</h3>
                                </div>
                            </div>
                            <div className='at-collect-Information'>
                                <div className='row'>
                                    <div className='col'>
                                        <div class="mb-3 mt-5">
                                            <label for="exampleFormControlInput1" className="form-label text-white ms-5 text-muted"><h5>Form Title</h5></label>
                                            <input type="text" className="form-control formInput ms-5" id="exampleFormControlInput1" />
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div class="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label text-white ms-5 text-muted"><h5>Form Description</h5></label>
                                            <textarea className="form-control formInput ms-5" id="exampleFormControlInput1"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col'>
                                        <div class="col-auto d-flex justify-content-center mt-3">
                                            <button type="submit" class="btn text-white  px-4 py-2 fw-bold btn-secondary">Save and Create Form</button>
                                        </div>
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
