import React from 'react';
import Routers from '../Routers/Routers';
import {Link} from 'react-router-dom'
import '../Css/Dashboard.css';
export default function Dashboard() {
  return <div>
      <header>
      <nav className ="navbar">
<ul className ="nav navbar-nav">
<li className ="nav-item">
<a className ="nav-link" href="<Homepage />"> My Dashboard </a>
</li>
<li className ="nav-item">
<a className ="nav-link" href="<LoginForm />"> Saved Forms </a>
</li>
<li className ="nav-item">
<a className ="nav-link" href="#"> Create Forms </a>
</li>
<li className ="nav-item">
<a className ="nav-link" href="#"> Log Out </a>
</li>
</ul>
</nav>
    </header>
  </div>;
}
