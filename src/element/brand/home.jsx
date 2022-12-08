import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Main from '@/element/Main.js'

import Mobile from '@/assert/icon/mobile.svg'
import Hyean from '@/assert/icon/hyean.svg'
import Logo from '@/assert/icon/logo.svg'
import Top_Arrow from '@/assert/icon/top-arrow.svg'
import logo from "@/assert/icon/logo.svg"
import logo_w from '@/assert/icon/logo-w.svg';

import "@/style/index.css"

export default function home()
{
    //useEffect(()=>{Main()})
    var [gnb,setGnb] = useState("gnb");

    function Header()
    {
        //useEffect(()=>{Update()})
        var [header,setHeader] = useState("header");
        var HeaderHeight = 100; 

        useEffect(()=> {
            document.addEventListener('scroll', handleScroll);
        })

        const handleScroll = () =>{
            if(HeaderHeight < window.scrollY) { setHeader("header white"); }
            else if(header == "header white") { setHeader("header"); }
        }

        return(
        <header className={`${header}`}>
            <div className="header-inner max-container">
                <div className="logo-box">
                    <a href="/">
                        <img src= {logo} className="logo" />
                        <img src= {logo_w} className="logo-w" />
                    </a>
                </div>
                <div className= {`${gnb}`} onClick={()=>{ GnbChager() }}>
                    <div className="mobile-gnb-btn">
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                        <span className="mobile-gnb-btn-line"></span>
                    </div>
                    <ul className="gnb-ul">
                        <li className="gnb-li "><a href="/">서비스 소개</a></li>
                        <li className="gnb-li mobile-hide"><a href="brand/registration">공동인증센터</a></li>
                        <li className="gnb-li mobile-hide"><a href="brand/requestForRefund">더낸세금 바로찾기</a></li>
                        <li className="gnb-li pc-hide"><a href="brand/notice">공지사항</a></li>
                        <li className="gnb-li pc-hide"><a href="brand/qa">문의하기</a></li>
                        <li className="gnb-li mobile-hide"><a href="brand/privacyStatement">개인정보취급방침</a></li>
                        <li className="gnb-li mobile-hide"><a href="brand/termsOfService">이용약관</a></li>
                        <li className="gnb-li pc-hide login-hide"><a href="brand/requestForRefundKakaoLogin">로그인</a></li>
                        <li className="gnb-li pc-hide"><a href="brand/myInfo">내회사정보 </a>
                        <button className="logout-btn purple-btn">로그아웃</button></li>
                    </ul>
                </div>
            </div>
        </header>)
    }

    // 초반 애니메이션을 넣는다. -> 스크롤을 통해서 애니메이션을 사용한다. 

    function Main()
    {
        var [obj, setObj] = useState(2);
        var objAni = document.querySelectorAll('.obj-ani'); 
        var windowH = window.innerHeight / 1.1;
        var objVulme = 2;
        useEffect(()=> { 
            document.addEventListener('scroll', handleScroll) 
            StartAni()
        } )

        const handleScroll = () =>{
            var i =0; 
            for(i=0; i < objAni.length; i++){
                const onjAniTop = objAni[i].getBoundingClientRect().top + window.pageYOffset;
                if(window.scrollY < onjAniTop - windowH) 
                { 
                    // 여기에 도달햇을때. 애니메이션을 세팅해준다.
                    //objVulme = i;
                    break; 
                } 
                
            }

            if(i == 0) { return; }
            if(obj < i) { console.log(obj +"/"+i); setObj(i); }
            
        }

        // 초반섹션? 
        const StartAni =() =>
        {
            //var free = document.querySelectorAll(".section");
            //console.log(free);
            //console.log(free[0].clientHeight); // 높이 
            // 현재의 높이와 같이 계산 그리고 그것보다 낮으면 애니메이션 재생 
            // 안됌 ㅋㅋ 
            // e
        }


        return(<div>
            <section className="section visual-sc">
            
            <h5 className="visual-sub-title obj-ani">
                국세 기본법 45조 2제1항
            </h5>
            
            <h1 className="visual-title obj-ani">
                5분이면 <br className= "mobile-br" /> 5년간 더 낸 세금을 <br /> 바로 찾을 수 있습니다. 
            </h1>

            <p className="text obj-ani">
                2020년 1월 법인세법이 변경되어 <br className="mobile-br" /> 
                법인세 경정청구를 납세 신고를 한 날로부터 5년이내, <br/> 
                과거 세제 혜택에 대한 누락, 자료미비 등으로 <br className="mobile-br" />
                <span className="underscore">더 납부한 세금 환급을 청구하는 제도</span>
            </p>

            <button className="btn obj-ani">
                <a href="brand/requestForRefund">더낸세금 바로 찾기</a>
            </button>

        </section>

        <section className="section reason-sc">

            <h2 className="section-title purple obj-ani">
                경정청구 전문 세무사와 <br className="mobile-br" />꼭! 상의해야 하는 이유
            </h2>

            <p className="text grey obj-ani">
                법인세법을 몰라서 세금의 공제 및 감면<br className="mobile-br" />  받을 수 있는 부분을 놓치는 경우가 많습니다.
            </p>

            <ul className="reason-ul">

                <li className="reason-li obj-ani">
                    <span className="quotation">“</span>
                    <p className="reason-text grey">
                        법인의 업종, 규모 등<br className="pc-br" />특성에 맞는 <br className="mobile-br" /> 공제,<br className="pc-br" />감면 요건 검토 필요
                    </p>
                </li>

                <li className="reason-li obj-ani">
                    <span className="quotation">“</span>
                    <p className="reason-text grey">
                        중소기업의<br/>자체 회계팀 부재
                    </p>
                </li>

                <li className="reason-li obj-ani">
                    <span className="quotation">“</span>
                    <p className="reason-text grey">
                        매년 변경되는<br className="pc-br" />새로운 <br className="mobile-br" /> 개정 세법,<br className="pc-br" />조세법 문제
                    </p> 
                </li>

                <li className="reason-li obj-ani">
                    <span className="quotation">“</span>
                    <p className="reason-text grey">
                        경정청구에 대한<br/>인지 부족 현상
                    </p>
                </li>
            </ul>
        </section>

        <section className="section application-sc">
            <div className="application-box">
                    <h2 className="section-title obj-ani">
                        5분이면<br className="mobile-br"/> 5년간 더 낸 세금<br/>바로 환급 신청
                    </h2>
                    <p className= "text obj-ani">5분! 스마트 세금환급 서비스를 경험해 보세요.<br/>물 흐르듯 자연스럽게 세금을 환급 받을 수 있습니다.</p> 
                    <button className="btn obj-ani"><a href="brand/requestForRefund">한 번에 찾고 환급 받기</a></button>
            </div>

            <div className="application-box obj-ani">
                    <div className="card">
                        <span className="left">
                            <span className="card-title">더 많은 세금 환급</span>
                            <span className="card-money">
                                    <span className="count-title">평균</span><span className="count">0</span>원
                            </span>
                            <span className="card-text ">자세한 환급액은 더낸세금 찾기</span>
                        </span>
                    </div>
                    <div className="phone">
                        <img src= { Mobile } />
                    </div>
            </div>
        </section>

        <section className="section team-sc">
            <h2 className="section-title obj-ani">
                경정청구 전문 세무사가<br />직접 검수 합니다.
            </h2>
            <p className="text obj-ani">믿을 수 있는 전문가에게 맡기세요.<br />경정청구 전문 세무사가 직접 검수하고 연락드립니다.<br />- 세무법인 혜안 경정청구팀 -</p>
            <button className="btn btn-w obj-ani">
                <a href="brand/requestForRefund">더낸세금 바로찾기</a>
            </button>
            <div className="wide-img obj-ani" /> 
        </section>

        <section className="team-sub-sc section">
            <div className="sub-box">
                <h3 className="sub-sc-title obj-ani">
                    써보면서<br className="mobile-br" /> 이해하는게 가장 빠릅니다.
                </h3>
                <p className="text obj-ani">
                    단 5분이면, 5년간 더 낸 세금을 <br className="mobile-br" /> 바로 환급 받을 수 있어요!
                </p>
                <div className="btn-box">
                    <button className="btn obj-ani">더낸세금 바로찾기</button>
                    <button className="btn obj-ani">더낸세금 문의하기</button>
                </div>
            </div>
        </section>

        <footer className="footer">

            <div className="fnb">
                <ul className="fnb-ul max-container">
                   <li className="fnb-li">서비스이용약관</li> 
                   <span className="col-line"></span>
                   <li className="fnb-li purple">개인정보 취급방침</li> 
                   <span className="col-line"></span>
                   <li className="fnb-li">문의하기</li> 
                   <span className="col-line"></span>
                   <li className="fnb-li">관리자 로그인</li> 
                </ul>
            </div>

            <div className="company-container max-container">

                <div className="company">
                    <div className="logo">
                        <img src= {Hyean} />
                    </div>
                    <div className="company-info">
                        <div className="company-info-row">
                            <span className="name">세무법인 혜안</span>
                            <span className="info-text">[06670] 서울특별시 서초구 반포대로 59 선흥빌딩 6층</span>
                        </div>
                        <div className="company-info-row">
                            <span className="info-text">대표세무사: 김관호, 남규용</span> 
                            <span className="col-line"></span>
                            <span className="info-text">사업자등록번호: 457-87-01550</span>
                        </div>
                        <div className="copyright">
                            ⓒ 2021 HYEAN TAX. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </div>

                <div className="company">
                    <div className="logo">
                        <img src= {Logo} />
                    </div>
                    <div className="company-info">
                        <div className="company-info-row">
                            <span className="name">스마트비즈(주)</span>
                            <span className="info-text">[06657] 서울특별시 서초구 반포대로 21길3 <br className="pc-hide" /> IWHA B1(서초동, 이화빌딩)</span>
                        </div>
                        <div className="company-info-row">
                            <span className="info-text">대표세무사: 김태형</span> 
                            <span className="col-line"></span>
                            <span className="info-text">사업자등록번호: 573-81-02048</span>
                        </div>
                        <div className="copyright">
                            ⓒ 2021 smartBiz. ALL RIGHTS RESERVED.
                        </div>
                    </div>
                </div>

            </div>

            <button className="top-btn" onClick={()=>{window.scrollTo(0,0)}}>
                <img src= { Top_Arrow }/>
            </button>
            
        </footer>
            
        </div>)
    }

    /*
       const asc = document.querySelector('.application-sc')
   asc.addEventListener('mouseover',()=>{
            // 카운트를 적용시킬 요소
            const $counter = document.querySelector(".count");
            // 목표 수치
            const max = 7000000 + 1;
            
            setTimeout(() => counter($counter, max),1800);
   },{ once : true })
    */



    function GnbChager()
    { if(gnb == "gnb") { setGnb("gnb moblie-gnb") } else { setGnb("gnb") } }

    return(<div className= "main">
        { Header() }
        { Main() }
    <Outlet /> </div> );
}