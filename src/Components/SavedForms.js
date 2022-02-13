import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function SavedForms() {
    return <div>
        <div className="container">
            <div className="row">
               <Header />
            </div>
            <div className="row">
                <div className="col-sm col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <Dashboard />
                </div>
                <div className="col-sm col-md-9 col-lg-9 col-xl-9 col-xxl-9">
                    <div className="at-main-login-container">
                        <h2 className="text-center text-white">Saved Forms</h2>
                        <div className="at-login-container">
                            <div className="row">
                                <div className="col-7 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-center">
                                    <p className="text-white at-saved-form-p"><span>1. </span>Personal Information Collection</p>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2  mb-3">
                                    <a href="#" className="at-saved-form-btn">View Data</a>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">Export Data</a>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">Delete Form</a>
                                </div>
                            </div>
                            <div className="row">
                                <hr className="at-saved-hr-line" />
                            </div>
                            <div className="row">
                                <div className="col-7 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-center">
                                    <p className="text-white at-saved-form-p"><span>2. </span>Collect Customer Data</p>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">View Data</a>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">Export Data</a>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">Delete Form</a>
                                </div>
                            </div>
                            <div className="row">
                                <hr className="at-saved-hr-line" />
                            </div>
                            <div className="row">
                                <div className="col-7 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-center">
                                    <p className="text-white at-saved-form-p"><span>3. </span>Collect Survey Data</p>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">View Data</a>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">Export Data</a>
                                </div>
                                <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                    <a href="#" className="at-saved-form-btn">Delete Form</a>
                                </div>
                            </div>
                            <div className="row">
                                <hr className="at-saved-hr-line" />
                            </div>
                            <div className="at-last-saved-form-element">
                                <div className="row">

                                    <div className="col-7 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 align-self-center">
                                        <p className="text-white at-saved-form-p"><span>4. </span>Job Application for Java Developers</p>
                                    </div>
                                    <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                        <a href="#" className="at-saved-form-btn">View Data</a>
                                    </div>
                                    <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                        <a href="#" className="at-saved-form-btn">Export Data</a>
                                    </div>
                                    <div className="d-grid col-1 col-sm-3 col-md-2 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                                        <a href="#" className="at-saved-form-btn">Delete Form</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div >;
}
