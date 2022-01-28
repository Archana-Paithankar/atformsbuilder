import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Homepage from './Components/Homepage'
import Routers from './Routers/Routers';
import UserDashboardFirst from './Components/UserDashboardFirst';
import FormFields from './Components/FormFields';
import FirstTimeLoginScreen from './Components/FirstTimeLoginScreen';
import UserDashboardCreateForm from './Components/UserDashboardCreateForm';

ReactDOM.render(
  <React.StrictMode>
    <UserDashboardCreateForm />
  
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
