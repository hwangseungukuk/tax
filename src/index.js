// react import 
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter } from 'react-router-dom'

// page import
import Main from './page/Js/index'
import Registration from './page/Js/registration'
import FindCompany from './page/Js/findCompany'
import Linked  from './page/Js/linked'
import MyInfo from './page/Js/myInfo'
import NoAccountInfo from './page/Js/noAccountInfo'
import Notice from './page/Js/notice'
import NoticeContents from './page/Js/noticeContents'
import PrivacyStatement from './page/Js/privacyStatement'
import Qa from './page/Js/qa'
import RequestForRefund from './page/Js/requestForRefund'
import RequestForRefundKakaoLogin from './page/Js/requestForRefundKakaoLogin'
import TermsOfService from './page/Js/termsOfService' 

function router () {

  return(
    <Routes> 
        <Route path={''} element={<Main/>} />
        <Route path={'findCompany'} element={<FindCompany/>} />
        <Route path={'linked'} element={<Linked/>} />
        <Route path={'myInfo'} element={<MyInfo/>} />
        <Route path={'noAccountInfo'} element={<NoAccountInfo/>} />
        <Route path={'notice'} element={<Notice/>} />
        <Route path={'noticeContents'} element={<NoticeContents/>} />
        <Route path={'privacyStatement'} element={<PrivacyStatement/>} />
        <Route path={'qa'} element={<Qa/>} />
        <Route path={'registration'} element={<Registration/>} />
        <Route path={'requestForRefund'} element={<RequestForRefund/>} />
        <Route path={'requestForRefundKakaoLogin'} element={<RequestForRefundKakaoLogin/>} />
        <Route path={'termsOfService'} element={<TermsOfService/>} />
    </Routes> 
  );
}

ReactDOM.createRoot(document.getElementById('root')).render (
  <BrowserRouter> { router() } </BrowserRouter>
)
