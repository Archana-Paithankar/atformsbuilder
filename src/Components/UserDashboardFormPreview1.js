import React from 'react';
import Site from './Site';
import Dashboard from './Dashboard';
import '../Css/style.css'
export default function UserDashboardFormPreview1() {
    return <div>
        <div className='container-fluid'>
            <div className='row pt-4'>
                <div className='col-8'>
                    <img src='/image/logo.png' className="logoimg" alt='logo' />
                </div>
                <div className='col pe-0'>Welcome<strong>[Username]</strong></div>
                <div className='col text-danger ps-0'><strong>Log Out</strong></div>
            </div>
            

            <div className='row mt-5'>
                <div className='col-3'>
                    <Dashboard />
                </div>
                 <div className='col-8'>
                    <div className='at-form-info-Container'>
                        <div className='row'>
                            <div className='col  d-flex justify-content-center'>
                                <h3 className='text-white p-4'> [Form-name] FORM FIELDS</h3>
                            </div>
                        </div>
                        <div className='at-collect-Information'>
                            <div className='row'>
                                <div className='col'>
                                    <div class="mb-3 mt-5">
                                        <label for="exampleFormControlInput1" className="form-label text-white ms-5 text-muted"><h5>Generated Links</h5></label>
                                        <input type="text" className="form-control formInput ms-5" id="exampleFormControlInput1" placeholder='https://atjoin.in/my-form-245' />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label text-white ms-5 text-muted"><h5>Create Custom Link</h5></label>
                                        <textarea className="form-control formInput ms-5" id="exampleFormControlInput1"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col px-5'>
                                    <hr className='text-white'/>
                                </div>
                            </div>
                            <div className='row d-flex justify-content-center'>                           
                                    <div class="col-auto mt-3 mb-5">
                                        <button type="submit" class="btn text-white  px-4 py-2 fw-bold btn-secondary">Save Link</button>
                                    </div>
                                    <div class="col-auto mt-3 mb-5">
                                        <button type="submit" class="btn text-white  px-4 py-2 fw-bold btn-secondary">Publish Now</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Site />
            </div>
        </div>
    </div>;
}
