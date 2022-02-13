import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function Loginpage() {

  return <div>
    <div className="container">
      <div className="row">
        <div className="col-sm col-md col-lg col-xl col-xxl py-3">
          <img src="./image/logo.png" className="img-fluid mx-auto d-block w-25" alt="logo" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm col-md col-lg col-xl col-xxl pb-3">
          <span className="at-feature-text d-flex justify-content-center">Make Your Forms For Free </span>
        </div>
      </div>
      <div className="row">
        <div className="col-sm col-md-6 col-lg-6 col-xl-6 col-xxl-6 hightlights">
          <p className="py-1">Simple way to add multiple fields</p>
          <p className="py-1">Create forms to collect information for your
            school, college, business and so on.</p>
          <p className="py-1">Get custom short links for free and share to
            collect information.</p>
          <p className="py-1">View collected information in tables</p>
          <p className="py-1">Export your collected data in excel format</p>
          <p className="py-1">Create unlimited forms with one account</p>
        </div>
        <div className="col-sm col-md-6 col-lg-6 col-xl-6 col-xxl-6">
          <div className="at-main-login-container pt-4">
            <h2 className="text-center text-white">START COLLECTING INFORMATION</h2>
            <div className="at-login-container">
              <div className="mb-3 mt-3">
                <label for="exampleFormControlInput1" className="form-label text-white">Enter Your Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label text-white">Enter Your Email
                  ID</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="mb-3">
              <Link to="/homepage" className="at-links">  <button type="button"
                  className="btn btn-lg mx-auto d-flex text-white at-login-button">Sign In or
                  Sign Up</button>
                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
