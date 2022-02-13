import React from 'react';
import { Outlet } from 'react-router-dom';
import '../Css/style.css';
import '../Css/mediaQuary.css';
export default function Site() {
  return <div>
    <div className="container">
    <div className='at-content'>
      <div classNameName='row'>
        <div classNameName='col-12'>
          <Outlet />
        </div>
      </div>
      </div>
        <div className="row">
          <div className="col-sm col-md col-lg col-xl col-xxl">
            <hr className="at-hr-line" />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="at-footer-p">Developed by - Arnav Technosys</p>
          </div>
          <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <p className="at-footer-p text-end">Powered by - ATJOIN PVT LTD</p>
          </div>
        </div>
  
    </div>
  </div>;
}
