import React from 'react';

export default function CreateForm() {
    return <div>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-8'>
                    <img src='/image/logo.png' className="logoimg" alt='logo' />
                </div>
                <div className='col'>Welcome<strong>[Username]</strong></div>
                <div className='col text-danger'>Log Out</div>
            </div>
            <div className='row mt-5'>
                <div className='col-4'>
                    {/* dashboard */}
                </div>
                <div className='col-6'>
                    <div className='formContainer'>
                        <div className='row'>
                            <div className='col  d-flex justify-content-center'>
                                <h3 className='text-white p-4'> CREATE FORM</h3>
                            </div>
                        </div>
                        <div className='collectInformation'>
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
                                        <textarea className="form-control formInput ms-5" id="exampleFormControlInput1" />
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
        </div>
    </div>;
}
