import React from 'react';
import Site from './Site';
import { Link } from 'react-router-dom';
import '../Css/style.css'
import FirstTimeLoginScreen from './FirstTimeLoginScreen';
export default function Homepage() {
  return <div>
    <div className="container-fluid">
      <div className='container p-5'>
        <div className='row'>
          <div className='col d-flex justify-content-center pb-4'>
            <img src='./image/logo.png' alt='logo' className='logoimg' />
          </div>
        </div>
        <div className='row'>
          <div className='col d-flex justify-content-center'>
            <h5 className='my-4 mb-5 h2'>MAKE YOUR FORMS FOR FREE</h5>
          </div>
        </div>
        <div className='row'>
          <div className='col-6 at-form-p-elements'>
            <div className='mb-2'>
              <p>Simple way to add multiple fields</p>
            </div>
            <div className='mb-2'>
              <p>Create forms to collect information for your school,college,business and so on.</p>
            </div>
            <div className='mb-2'>
              <p>Get custome short links for free and and share to collect information.</p>
            </div>
            <div className='mb-2'>
              <p>View collected information in tables</p>
            </div>
            <div className='mb-2'>
              <p>Export your collected data in excel format.</p>
            </div>
            <div className='mb-2'>
              <p>Create unlimited forms with one account.</p>
            </div>
          </div>

          <div className='col-7'>
            <div className='at-form-info-Container'>
              <div className='row'>
                <div className='col  d-flex justify-content-center'>
                  <h3 className='text-white p-4'> START COLLECTING INFORMATION</h3>
                </div>
              </div>
              <div className='at-collect-Information'>
                <div className='row'>
                  <div className='col'>
                    <div class="mb-3 mt-5">
                      <label for="exampleFormControlInput1" className="form-label text-white ms-5 text-muted"><h5>Enter Your Name</h5></label>
                      <input type="text" className="form-control formInput ms-5" id="exampleFormControlInput1" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div class="mb-3">
                      <label for="exampleFormControlTextarea1" className="form-label text-white ms-5 text-muted"><h5>Enter Your Email ID</h5></label>
                      <input type="email" className="form-control formInput ms-5" id="exampleFormControlInput1" />
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col'>
                    <div class="col-auto d-flex justify-content-center mt-3">
                   <Link to="/firsttimeloginscreen"><button type="submit" class="btn text-white  px-4 py-2 fw-bold btn-secondary">Sign in or Sign Up</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Site /> */}
    </div>
  </div>
}
