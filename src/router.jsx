import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Header from './element/brand/components/header.jsx'
import Home from './element/brand/home.jsx'
import Registration from './element/brand/registration.jsx'
import Linked from './element/brand/linked.jsx'
import PrivacyStatement from './element/brand/privacyStatement.jsx'
import TermsOfService from './element/brand/termsOfService.jsx'
import Qa from './element/brand/qa.jsx'
import MyInfo from './element/brand/myInfo'

import RequestForRefund from './element/brand/requestForRefund/requestForRefund.jsx'
import RequestForRefundKakaoLogin from './element/brand/requestForRefund/RequestForRefundKakaoLogin.jsx'
import FindCompany from './element/brand/requestForRefund/findCompany.jsx'

const router = createBrowserRouter([
  { path: "", element: <Home/> },
  { path: "brand", element: <Header/>, 
    children: [
      { path: "registration", element: <Registration /> },
      { path: "linked", element: <Linked /> },
      { path: "privacyStatement", element: <PrivacyStatement /> },
      { path: "termsOfService", element: <TermsOfService /> },
      { path: "qa", element: <Qa/> }, 
      { path: "myInfo", element: <MyInfo /> },
      { path: "requestForRefund",
        children:[
          { path: "", element: <RequestForRefund />},
          { path: "kakaoLogin", element: <RequestForRefundKakaoLogin />},
          { path: "findCompany", element: <FindCompany />},
        ]
      }
    ]
  }
]);

// 공지사항 안만듬 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router= { router } />
  </React.StrictMode>
)
