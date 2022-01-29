import React from 'react';
import '../Css/style.css'
export default function Header() {
  return <div>
      <div className='container-fluid'>
         
          <div className='row pt-4'>
                    <div className='col-7'>
                        <img src='/image/logo.png' className="logoimg" alt='logo' />
                    </div>
                    <div className='col-3 pe-0 at-username'><a href="">Welcome<strong>[User-name]</strong></a></div>
                    <div className='col-2 ps-0 at-logout-btn'><a href=""><strong>Log Out</strong></a></div>
                </div>
          
      </div>
  </div>;
}
