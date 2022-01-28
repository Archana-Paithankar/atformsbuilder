import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Components/Homepage'

import WelcomePage from './Components/WelcomePage'
import Routers from './Routers/Routers';
import CreateForm from './Components/CreateForm';
import UserDashboardFirst from './Components/UserDashboardFirst';
import FormFields from './Components/FormFields';

ReactDOM.render(
  <React.StrictMode>
    <UserDashboardFirst />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
