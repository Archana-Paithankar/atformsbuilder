import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import '../Css/style.css';
import '../Css/mediaQuary.css';
import { Link } from 'react-router-dom';
export default function FormInput1() {
    return <div>
         <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-sm col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <Dashboard />
                </div>
                <div className="col-sm col-md-7 col-lg-7 col-xl-7 col-xxl-7">
                    <div className="at-main-login-container">
                        <h2 className="text-center text-white">[FORM NAME]FORM FIELDS</h2>
                        <div className="at-login-container">
                            <div className="row">
                                <div className="mb-3 mt-3">
                                    <label for="exampleFormControlInput1" className="form-label text-white">Field Title</label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-3">
                                    <div className="col-sm col-md col-lg col-xl col-xxl">
                                        <label for="exampleFormControlInput1" className="form-label text-white">Field Type</label>
                                        <button className="btn float-end at-optional-btn text-white">Optional</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline mb-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label text-white at-radio-input" for="inlineRadio2">Short
                                            Input Text</label>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline mb-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label text-white at-radio-input" for="inlineRadio2">Check
                                            box</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline mb-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label text-white at-radio-input" for="inlineRadio2">Radio
                                            Button</label>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline mb-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label text-white at-radio-input" for="inlineRadio2">File
                                            Upload</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline mb-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label text-white at-radio-input"
                                            for="inlineRadio2">Date</label>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline mb-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label text-white at-radio-input" for="inlineRadio2">Long
                                            Input Text</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6 col-sm-6col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                    <div className="form-check form-check-inline mb-3">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                            id="inlineRadio2" value="option2" />
                                        <label className="form-check-label text-white at-radio-input" for="inlineRadio2">Drop
                                            Down Menu</label>
                                    </div>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                </div>
                            </div>
                            <div className="row">
                                <div className="">
                                    <div className="col-sm col-md col-lg col-xl col-xxl">
                                        <button className="btn rounded float-end fw-bold at-add-more-field-btn">Add More Fields</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="">
                                    <div className="col-sm col-md col-lg col-xl col-xxl">
                                        <hr className="at-hr-line" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                             <Link to="/preview1" className='at-links'> <button type="button"
                                    className="btn btn-secondary btn-lg mx-auto d-flex text-white at-save-button">Save and Continue</button>
                            </Link>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div >;

}
