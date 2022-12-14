import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import "@/style/index.css"
import Logo from '@/assert/icon/logo.svg'
import LogoW from '@/assert/icon/logo-w.svg'
import ArrowBack from "@/assert/icon/arrow-back.svg"

export default function Header()
{
    var [gnb, setGnb] = useState("gnb pop-gnb");
    var navigate = useNavigate();

    function Nav(nav) { nav == "/" ? navigate(nav) : navigate("/brand/"+nav) }

    function GnbChage()
    { if(gnb == "gnb pop-gnb") { setGnb("gnb pop-gnb moblie-gnb") } else { setGnb("gnb pop-gnb") } }

    return(<div className="main">
        <header className="header pop-header">
            <div className="header-inner max-container">
                <div className="logo-box" onClick={()=>Nav("/")}>
                        <img src= {Logo} className="logo" />
                        <img src= {LogoW} className="logo-w" />
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
                        <li className="gnb-li mobile-hide" onClick={()=>Nav("qa")}>문의하기</li>
                        <li className="gnb-li mobile-hide" onClick={()=>Nav("notice")}>공지사항</li>
                        <li className="gnb-li mobile-hide" onClick={()=>Nav("linked")}>인증관리</li>
                        <li className="gnb-li mobile-hide" onClick={()=>Nav("privacyStatement")}>개인정보취급방침</li>
                        <li className="gnb-li mobile-hide" onClick={()=>Nav("termsOfService")}>이용약관</li>
                        
                        <li className="gnb-li pc-hide" onClick={()=>Nav("/")}>서비스 소개</li>
                        <li className="gnb-li pc-hide" onClick={()=>Nav("notice")}>공지사항</li>
                        <li className="gnb-li pc-hide" onClick={()=>Nav("qa")}>문의하기</li>
                        <li className="gnb-li pc-hide" onClick={()=>Nav("termsOfService")}>개인정보취급방침</li>
                        <li className="gnb-li pc-hide" onClick={()=>Nav("privacyStatement")}>서비스 이용약관</li>
                        <li className="gnb-li pc-hide login-hide" onClick={()=>Nav("requestForRefund/kakaoLogin")}>로그인</li>
                        <li className="gnb-li pc-hide" onClick={()=>Nav("myInfo")}>내회사정보
                            <button className="logout-btn purple-btn">로그아웃</button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    <Outlet/></div>);
}