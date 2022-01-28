import React from 'react';

export default function UserDashboardFormInput1() {
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
                                <h3 className='text-white p-4'> [FORM NAME] FORM FIELDS</h3>
                            </div>
                        </div>
                        <div className='collectInformation'>
                            <div className='row'>
                                <div className='col'>
                                    <div class="mb-3 mt-5">
                                        <label for="exampleFormControlInput1" className="form-label text-white ms-5 text-muted"><h5>Field Title</h5></label>
                                        <input type="text" className="form-control formInput ms-5" id="exampleFormControlInput1" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" className="form-label text-white ms-5 text-muted"><h5>Field Type</h5></label>
                                        <textarea className="form-control formInput ms-5" id="exampleFormControlInput1" />
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label text-white" for="flexRadioDefault1">
                                              Short Input Text
                                            </label>
                                    </div>
                                    </div>
                                    <div className='col'></div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                            <label className="form-check-label text-white" for="flexRadioDefault2">
                                                Checkbox
                                            </label>
                                    </div>
                                </div>
                                <div className='col'></div>
                            </div>

                            <div className='row'>
                                <div className='col'>
                                    <div class="col-auto d-flex justify-content-center mt-3">
                                        <button type="submit" class="btn text-white  px-4 py-2 fw-bold btn-secondary">Save and Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  
    </div>;
}
