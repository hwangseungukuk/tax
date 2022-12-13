import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Header from '@/Element/brand/Components/Header.jsx'
import Home from '@/Element/brand/Home.jsx'
import Registration from '@/Element/brand/Registration.jsx'
import Linked from '@/Element/brand/Linked.jsx'
import PrivacyStatement from '@/Element/brand/PrivacyStatement.jsx'
import TermsOfService from '@/Element/brand/TermsOfService.jsx'
import Qa from '@/Element/brand/Qa.jsx'
import MyInfo from '@/Element/brand/MyInfo.jsx'
import RequestForRefund from '@/Element/brand/RequestForRefund/RequestForRefund.jsx'
import FindCompany from '@/Element/brand/RequestForRefund/FindCompany.jsx'
import Notice from '@/Element/brand/Notice.jsx'

const Router = createBrowserRouter([
  { path: "", element: <Home/> },
  { path: "brand", element: <Header/>, 
    children: [
      { path: "registration", element: <Registration /> },
      { path: "linked", element: <Linked /> },
      { path: "privacyStatement", element: <PrivacyStatement /> },
      { path: "termsOfService", element: <TermsOfService /> },
      { path: "qa", element: <Qa/> }, 
      { path: "myInfo", element: <MyInfo /> },
      { path: "notice", element: <Notice /> },
      { path: "requestForRefund",
        children:[
          { path: "", element: <RequestForRefund />},
          { path: "findCompany", element: <FindCompany />},
        ]
      }
    ]
  }
]);

// 공지사항 안만듬 

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router= { Router } />
  // </React.StrictMode>
)
