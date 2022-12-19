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
import { RecoilRoot } from 'recoil'

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

ReactDOM.createRoot(document.getElementById('root')).render(
    <RecoilRoot>
      <RouterProvider router= { Router } />
    </RecoilRoot>
)

// 공지사항-> 계속 아래로 내려가는식으로 작성되는지 아님 페이지를 나눌지
// 페이지를 나눈다면 몇개를 제한을 둘지
// 로그인할때 requestForRefund로 들어가서 requestForRefundKaKaologin으로 가는데 
// 카카오 로그인 이후 바로 회사찾기로 들어가는지
// 뒤로가기...<-- 뭐라질문해야됨


