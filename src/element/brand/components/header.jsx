import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import "@/style/index.css"
import Logo from '@/assert/icon/logo.svg'
import LogoW from '@/assert/icon/logo-w.svg'
import ArrowBack from "@/assert/icon/arrow-back.svg"
import Sub from '@/element/Sub.js'

export default function Header()
{
    var [gnb, setGnb] = useState("gnb pop-gnb");
    
    useEffect(()=>{Sub()});

    function GnbChage()
    { if(gnb == "gnb pop-gnb") { setGnb("gnb pop-gnb moblie-gnb") } else { setGnb("gnb pop-gnb") } }

    return(<div className="main">
        <header className="header pop-header">
            <div className="header-inner max-container">
                <div className="logo-box">
                    <a href="/">
                        <img src= {Logo} className="logo" />
                        <img src= {LogoW} className="logo-w" />
                    </a>
                </div>
                <div className="header-btn-box">
                    <button className="back-btn pc-hide" onClick={()=>{ history.go(-1); }}> 
                        <img src= {ArrowBack} /> 
                    </button>
                    <button className="login-btn line-btn purple-btn mobile-hide" > <a href="requestForRefund">로그인</a> </button>
                    <span className="logout-btn-box mobile-hide">
                        <a href="myInfo">내회사정보</a> 
                        <button className="logout-btn line-btn purple-btn mobile-hide">로그아웃</button>
                    </span>
                </div>
                <div className={`${gnb}`} onClick = {()=> { GnbChage()} }>
                    <div className="mobile-gnb-btn">
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                    </div>
                    <ul className="gnb-ul">
                        <li className="gnb-li mobile-hide"><a href="qa">문의하기</a></li>
                        <li className="gnb-li mobile-hide"><a href="notice">공지사항</a></li>
                        <li className="gnb-li mobile-hide"><a href="linked">인증관리</a></li>
                        <li className="gnb-li mobile-hide"><a href="privacyStatement">개인정보취급방침</a></li>
                        <li className="gnb-li mobile-hide"><a href="termsOfService">이용약관</a></li>
                        
                        <li className="gnb-li pc-hide"><a href="">서비스 소개</a></li>
                        <li className="gnb-li pc-hide"><a href="notice">공지사항</a></li>
                        <li className="gnb-li pc-hide"><a href="qa">문의하기</a></li>
                        <li className="gnb-li pc-hide"><a href="termsOfService">개인정보취급방침</a></li>
                        <li className="gnb-li pc-hide"><a href="privacyStatement">서비스 이용약관</a></li>
                        <li className="gnb-li pc-hide login-hide"><a href="requestForRefund/kakaoLogin">로그인</a></li>
                        <li className="gnb-li pc-hide"><a href="myInfo">내회사정보 </a>
                        <button className="logout-btn purple-btn">로그아웃</button></li>
                    </ul>
                </div>
            </div>
        </header>
    <Outlet/></div>);
}