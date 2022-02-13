import React from 'react';
import Dashboard from './Dashboard'
import Header from './Header';
import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function CreateForm() {
    return <div>
        <div className="container">
            <div className="row">
                <Header />
            </div>
            <div className="row">
                <div className="col-sm col-md-3 col-lg-3 col-xl-3 col-xxl-3 text-center">
                    <Dashboard />
                </div>
                <div className="col-sm col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <div className="at-main-login-container">
                        <h2 className="text-center text-white">CREATE FORM</h2>
                        <div className="at-login-container">
                            <div className="mb-3 mt-3">
                                <label for="exampleFormControlInput1" className="form-label text-white">Form Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label text-white">Form Description
                                </label>
                                <textarea className="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
                            </div>
                            <div className="mb-3">
                                <Link to="/forminput1" className="at-links"> <button type="button"
                                    className="btn btn-secondary btn-lg mx-auto d-flex text-white at-save-button">Save and
                                    Create Form</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>;
}
