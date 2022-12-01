import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter } from 'react-router-dom'

import Main from './page/index/index'
import Registration from './page/registration/index'
import RequestForRefund from './page/requestForRefund/index'
import PrivacyStatement from './page/privacyStatement/index'
import TermsOfService from './page/termsOfService/index'

// 여기에 범용성따로?
function router () {
  return(
    <Routes> 
        <Route path={''} element={<Main/>} />
        <Route path={'/registration'} element={<Registration/>} />
        <Route path={'/requestForRefund'} element={<RequestForRefund/>} />
        <Route path={'/privacyStatement'} element={<PrivacyStatement/>} />
        <Route path={'/TermsOfService'} element={<TermsOfService/>} />
    </Routes> 
  );
}

ReactDOM.createRoot(document.getElementById('root')).render (
  <BrowserRouter> { router() } </BrowserRouter>
)
