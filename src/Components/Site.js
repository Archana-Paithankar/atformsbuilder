import React from 'react';
import { Outlet } from 'react-router-dom';
import Routers from '../Routers/Routers';
import {Link} from 'react-router-dom'
import Dashboard from './Dashboard';
export default function Site() {
  return <div>
    <Dashboard />
    <Outlet />
    <footer className="page-footer">
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <hr className=' border-5 border-top border-dark' />
          </div>
        </div>
        <div className='row'>
          <div className='col-6'><h4>Developed By- Arnav Technosys.</h4></div>
          <div className='col-6 text-end'><h4>Powered By- ATJOIN PVT LTD.</h4></div>
        </div>
      </div>
    </footer>



    {/* <footer class="page-footer font-small blue">
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
</footer> */}

  </div>;
}
