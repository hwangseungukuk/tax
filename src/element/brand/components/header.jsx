import React from 'react'
import { Outlet } from 'react-router-dom';
import logo from "@/assert/icon/logo.svg"
import logo_w from '@/assert/icon/logo-w.svg';
import "@/style/index.css"

export default function header_Line()
{
    return(
        <div>
            <header className="header">
            <div className="header-inner max-container">
                <div className="logo-box">
                    <a href="/">
                        <img src= {logo} className="logo" />
                        <img src= {logo_w} className="logo-w" />
                    </a>
                </div>
                <div className="gnb">
                    <div className="mobile-gnb-btn">
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                    </div>
                    <ul className="gnb-ul">
                        <li className="gnb-li "><a href="/">서비스 소개</a></li>
                        <li className="gnb-li mobile-hide"><a href="registration">공동인증센터</a></li>
                        <li className="gnb-li mobile-hide"><a href="requestForRefund">더낸세금 바로찾기</a></li>
                        <li className="gnb-li pc-hide"><a href="notice">공지사항</a></li>
                        <li className="gnb-li pc-hide"><a href="qa">문의하기</a></li>
                        <li className="gnb-li mobile-hide"><a href="privacyStatement">개인정보취급방침</a></li>
                        <li className="gnb-li mobile-hide"><a href="termsOfService">이용약관</a></li>
                        <li className="gnb-li pc-hide login-hide"><a href="requestForRefundKakaoLogin">로그인</a></li>
                        <li className="gnb-li pc-hide"><a href="myInfo">내회사정보 </a>
                        <button className="logout-btn purple-btn">로그아웃</button></li>
                    </ul>
                </div>
            </div>
        </header>
        <Outlet /> </div>
    );
}