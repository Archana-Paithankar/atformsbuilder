import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Components/Homepage'
import Routers from './Routers/Routers';
import UserDashboardFirstTime from './Components/UserDashboardFirstTime';
import UserDashboardFormInput1 from './Components/UserDashboardFormInput1';
import FirstTimeLoginScreen from './Components/FirstTimeLoginScreen';
import UserDashboardCreateForm from './Components/UserDashboardCreateForm';
import UserDashboardSavedForms from './Components/UserDashboardSavedForms';

ReactDOM.render(
  <React.StrictMode>
    <UserDashboardSavedForms />
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
