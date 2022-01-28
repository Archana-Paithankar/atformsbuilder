import React from 'react';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import Homepage from '../Components/Homepage';

import Site from '../Components/Site';
export default function Routers() {
  return <div>
<BrowserRouter>
      <Routes>
          <Route path="/" element={<Site />}>
                <Route path="" element={<Homepage />} />
                {/* <Route path="savedforms" element={} /> */}
          </Route>
      </Routes>
      </BrowserRouter>
  </div>;
}
