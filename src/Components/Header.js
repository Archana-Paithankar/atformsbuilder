import React from 'react';
import '../Css/style.css'
import { Link } from 'react-router-dom';
export default function Header() {
    return <div>
        <div className='container-fluid'>

            <div className='row pt-4'>
                <div className='col-7'>
                    <Link to="/homepage"> <img src='/image/logo.png' className="logoimg" alt='logo' /></Link>
                </div>
                <div className='col-3 pe-0 at-username'><a href="">Welcome<strong>[User-name]</strong></a></div>
                <div className='col-2 ps-0 at-logout-btn'>
                    <Link to="/homepage">
                        <a href="">
                            <strong>Log Out</strong>
                        </a>
                    </Link>
                </div>
            </div>

        </div>
    </div>;
}
