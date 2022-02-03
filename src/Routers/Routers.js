import React from 'react';
import {BrowserRouter,Routes,Route
} from 'react-router-dom';
import Homepage from '../Components/Homepage';
import UserDashboardSavedForms from '../Components/UserDashboardSavedForms';
import Site from '../Components/Site';
import Dashboard from '../Components/Dashboard';
import FirstTimeLoginScreen from '../Components/FirstTimeLoginScreen';
import Header from '../Components/Header';
import UserDashboardCreateForm from '../Components/UserDashboardCreateForm';
import UserDashboardFirstTime from '../Components/UserDashboardFirstTime';
import UserDashboardFormInput1 from '../Components/UserDashboardFormInput1';
import UserDashboardFormInput2 from '../Components/UserDashboardFormInput2';
import UserDashboardFormPreview from '../Components/UserDashboardFormPreview';
import UserDashboardFormPreview1 from '../Components/UserDashboardFormPreview1';

export default function Routers() {
  return <div>
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Site />}>
                <Route path="homepage" element={<Homepage />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="header" element={<Header />} />
                <Route path="firsttimeloginscreen" element={<FirstTimeLoginScreen />} />
                <Route path="userdashboardcreateform" element={<UserDashboardCreateForm />} />
                <Route path="userdashboardfirsttime" element={<UserDashboardFirstTime />} />
                <Route path="userdashboardforminput1" element={<UserDashboardFormInput1 />} />
                <Route path="userdashboardforminput2" element={<UserDashboardFormInput2 />} />
                <Route path="userdashboardformpreview" element={<UserDashboardFormPreview />} />
                <Route path="userdashboardformpreview1" element={<UserDashboardFormPreview1 />} />
                <Route path="userdashboardsavedforms" element={<UserDashboardSavedForms />} />
          </Route>
      </Routes>
      </BrowserRouter>
  </div>;
}
