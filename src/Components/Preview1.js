import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function Preview1() {
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
                                <label for="exampleFormControlInput1" className="form-label text-white">Enter Your Name
                                    <span>*</span></label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-3">
                                <div className="col-sm col-md col-lg col-xl col-xxl">
                                    <label for="exampleFormControlInput1" className="form-label text-white">Enter Your Email
                                        ID</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" required />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-1">
                                <div className="col-sm col-md col-lg col-xl col-xxl">
                                    <label for="exampleFormControlInput1" className="form-label text-white">Select Your
                                        Gender <span>*</span></label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="form-check form-check-inline mb-3">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio2" value="option2" required />
                                    <label className="form-check-label text-white at-radio-input ms-4"
                                        for="inlineRadio2">Male</label>
                                </div>
                            </div>
                            <div className="col-sm col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                                <div className="form-check form-check-inline mb-3">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio2" value="option2" required />
                                    <label className="form-check-label text-white at-radio-input ms-4"
                                        for="inlineRadio2">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm col-md col-lg col-xl col-xxl">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-white">Enter Your
                                        Address
                                    </label>
                                    <textarea className="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm col-md col-lg col-xl col-xxl">
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label text-white">Give Suggestion
                                    </label>
                                    <textarea className="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
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
                        <div className="row d-flex justify-content-center">
                            <div className="d-grid col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mb-3">
                             <button className="btn btn-block btn-secondary text-white at-back-btn" type="button">   <Link to="/forminput1" className="at-links">Back</Link></button>
                            </div>  
                        <div className="d-grid col-5 col-sm-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 mb-3">
                            <button className="btn btn-block btn-secondary text-white at-back-btn" type="button"><Link to="/preview2" className="at-links">Create link and
                                publish</Link></button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> 
    </div>   
  </div >;
}
