import React from 'react';
import Site from './Site';
import Dashboard from './Dashboard';
import Header from './Header';
import { Link } from 'react-router-dom';
export default function UserDashboardFormInput2() {
  return <div>
    <div className='container-fluid'>
            <div className='row pt-3'>
                <div className='col'>
                    <Header />
                   </div>
            </div>
            <div className='row mt-5'>
                <div className='col-3 mt-5'>
                    <Dashboard />
                </div>
                <div className='col-7'>
                    <div className='at-form-info-Container'>
                        <div className='row'>
                            <div className='col  d-flex justify-content-center'>
                                <h3 className='text-white p-4'> [FORM NAME] FORM FIELDS</h3>
                            </div>
                        </div>
                        <div className='at-collect-Information'>
                            <div className='row'>
                                <div className='col mt-2'>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label text-white ms-5 text-muted"><h5>Field Title</h5></label>
                                        <input type="text" className="form-control formInput ms-5" id="exampleFormControlInput1" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div class="mb-1">
                                        <label for="exampleFormControlTextarea1" className="form-label text-white ms-5 text-muted"><h5>Field Type</h5></label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Short Input Text
                                        </label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label text-white" for="flexRadioDefault2">
                                            Checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Radio Button
                                        </label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label text-white" for="flexRadioDefault2">
                                            File Upload
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Date
                                        </label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label text-white" for="flexRadioDefault2">
                                            Long Input Text
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Drop Down Menu
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col mt-2'>
                                    <div class="mb-3">
                                        <label for="exampleFormControlInput1" className="form-label text-white ms-5 text-muted"><h5>Field Title</h5></label>
                                        <input type="text" className="form-control formInput ms-5" id="exampleFormControlInput1" />
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    <div class="mb-1">
                                        <label for="exampleFormControlTextarea1" className="form-label text-white ms-5 text-muted"><h5>Field Type</h5></label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Short Input Text
                                        </label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label text-white" for="flexRadioDefault2">
                                            Checkbox
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Radio Button
                                        </label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label text-white" for="flexRadioDefault2">
                                            File Upload
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Date
                                        </label>
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label text-white" for="flexRadioDefault2">
                                            Long Input Text
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col ms-5'>
                                    <div className="form-check mb-1">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" for="flexRadioDefault1">
                                            Drop Down Menu
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 d-flex justify-content-end'>
                                <div className="col-4 me-5">
                                    <button type="submit" className="btn text-white fw-bold bg-secondary">Add More Fields</button>
                                </div>
                                </div>
                        </div>
                        <div className='row'>
                            <div className='col px-5'>
                                <hr />
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center'>                          
                                <div className="col-5">
                                <Link to="/userdashboardformpreview"><button type="submit" className="btn text-white px-4 py-4 fw-bold btn-secondary" id="at-form-button">Save and Continue</button></Link>
                                </div>
                        </div>
                        </div>
                    </div>   
                </div>
            </div>
            {/* <Site /> */}
        </div>
  </div>;
}
