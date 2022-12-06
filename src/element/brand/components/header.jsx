import React from 'react'
import { Outlet } from 'react-router-dom';

import "@/style/index.css"
import Logo from '@/assert/icon/logo.svg'
import LogoW from '@/assert/icon/logo-w.svg'
import ArrowBack from "@/assert/icon/arrow-back.svg"

export default function header()
{
    return(<div>
         <header className="header">
            <div className="header-inner max-container">
                <div className="logo-box">
                    <a href="/">
                        <img src= { Logo } className="logo" />
                        <img src= { LogoW } className="logo-w" />
                    </a>
                </div>
                <div className="header-btn-box">
                    <button className="back-btn pc-hide">
                        <img src= { ArrowBack } />
                    </button>
                    <button className="login-btn line-btn purple-btn mobile-hide" ><a href="/brand/requestForRefund">로그인</a></button>
                    <span className="logout-btn-box mobile-hide">
                        <a href="/brand/myInfo.html">내회사정보</a>
                        <button className="logout-btn line-btn purple-btn mobile-hide">로그아웃</button>
                    </span>
                </div>
                <div className="gnb pop-gnb">
                    <div className="mobile-gnb-btn">
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                    </div>
                    <ul className="gnb-ul">
                        <li className="gnb-li mobile-hide"><a href="/brand/qa">문의하기</a></li>
                        <li className="gnb-li mobile-hide"><a href="/brand/notice">공지사항</a></li>
                        <li className="gnb-li mobile-hide"><a href="/brand/linked">인증관리</a></li>
                        <li className="gnb-li mobile-hide"><a href="/brand/privacyStatement">개인정보취급방침</a></li>
                        <li className="gnb-li mobile-hide"><a href="/brand/termsOfService">이용약관</a></li>
                        
                        <li className="gnb-li pc-hide"><a href="/">서비스 소개</a></li>
                        <li className="gnb-li pc-hide"><a href="/brand/notice">공지사항</a></li>
                        <li className="gnb-li pc-hide"><a href="/brand/qa">문의하기</a></li>
                        <li className="gnb-li pc-hide"><a href="/brand/termsOfService">개인정보취급방침</a></li>
                        <li className="gnb-li pc-hide"><a href="/brand/privacyStatement">서비스 이용약관</a></li>
                        <li className="gnb-li pc-hide login-hide"><a href="/brand/requestForRefundKakaoLogin">로그인</a></li>
                        <li className="gnb-li pc-hide"><a href="/brand/myInfo">내회사정보 </a>
                        <button className="logout-btn purple-btn">로그아웃</button></li>
                    </ul>
                </div>
            </div>
        </header>
    <Outlet/></div>);
}