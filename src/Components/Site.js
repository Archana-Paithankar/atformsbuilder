import React from 'react';
import { Outlet } from 'react-router-dom';
import Routers from '../Routers/Routers';
import {Link} from 'react-router-dom'
import Dashboard from './Dashboard';
import '../Css/style.css'
export default function Site() {
  return <div>
    <div className='container-fluid'>
    <footer className="page-footer">
        <div className='row'>
          <div className='col-12 mb-0'>
            <hr className='border-5 border-top border-dark' />
          </div>
          <div className='col-6  pb-3'><h4>Developed By- Arnav Technosys.</h4></div>
          <div className='col-6 text-end pb-3'><h4>Powered By- ATJOIN PVT LTD.</h4></div>
        </div>
    </footer>
    </div>
  </div>;
}
