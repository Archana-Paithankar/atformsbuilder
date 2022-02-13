import React from 'react';
import Dashboard from './Dashboard';
import Header from './Header';
import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function Preview2() {
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
                                    <label for="exampleFormControlInput1" className="form-label text-white">Generated Links
                                    </label>
                                    <input type="text" className="form-control" id="exampleFormControlInput1"
                                        placeholder="https://atjoin.in/my-form-245" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="mb-4">
                                    <div className="col-sm col-md col-lg col-xl col-xxl">
                                        <label for="exampleFormControlInput1" className="form-label text-white">Create Custom
                                            Link
                                        </label>
                                        <input type="email" className="form-control" id="exampleFormControlInput1" required />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="mb-1">
                                    <div className="col-sm col-md col-lg col-xl col-xxl">
                                        <hr className="at-hr-line" />
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center">
                                <div className="d-grid col-4 mb-3">
                                <Link to="/savedforms" className='at-links' >  <button className="btn gap-2 btn-block btn-secondary at-back-btn" type="button">Save
                                        Link</button>
                                        </Link>
                                </div>
                                <div className="d-grid col-4 mb-3">
                                <button className="btn btn-block btn-secondary at-back-btn" type="button">Publish
                                        Link</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}
