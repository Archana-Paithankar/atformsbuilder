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
import UserDashboardFormPreview1 from './Components/UserDashboardFormPreview1';
import UserDashboardFormPreview from './Components/UserDashboardFormPreview';

ReactDOM.render(
  <React.StrictMode>
    <UserDashboardFormPreview />
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
