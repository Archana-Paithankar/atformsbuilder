import React from 'react';
import {BrowserRouter,Routes,Route
} from 'react-router-dom';
import Loginpage from '../Components/Loginpage';
import Homepage from '../Components/Homepage';
import Header from '../Components/Header';
import Dashboard from '../Components/Dashboard';
import Site from '../Components/Site';
import CreateForm from '../Components/CreateForm';
import Welcome from '../Components/Welcome';
import Preview1 from '../Components/Preview1';
import Preview2 from '../Components/Preview2';
import FormInput1 from '../Components/FormInput1';
import SavedForms from '../Components/SavedForms';
export default function Routers() {
  return <div>
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Site />}>
                <Route index path="/" element={<Loginpage />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="header" element={<Header />} />
                <Route path="homepage" element={<Homepage />} />
                <Route path="createform" element={<CreateForm />} />
                <Route path="welcome" element={<Welcome />} />
                <Route path="forminput1" element={<FormInput1 />} />
                <Route path="preview1" element={<Preview1 />} />
                <Route path="preview2" element={<Preview2 />} />
                <Route path="savedforms" element={<SavedForms />} />
          </Route>
      </Routes>
      </BrowserRouter>
  </div>;
}
