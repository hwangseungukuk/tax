import React from 'react'
import { Outlet } from 'react-router-dom';

import * as Func from '@/element/brand/Components/Func.jsx'
import HomeTax from "@/assert/icon/hometax.svg"
import TotalLogo from "@/assert/icon/total-logo.svg"


export default function linked()
{
    return(<div>
        <section className="pop-section">
            <div className="max-container">
                { Func.BackBtn() }
                <div className="pop-section-contents">
                    <span className="pop-title">연동관리</span>
                    <form className="pop-max-contents">
                        <div className="link-box border-box">
                            <span className="pop-text">홈택스</span> 
                            <div className="link-contents">
                                <div className="logo">
                                     <img src={HomeTax}/>
                                </div>
                                <div className="input-box">
                                    <div className="input-contents">
                                        <span className="input-title">인증서명</span>
                                        <input type="text" />
                                    </div>
                                    <div className="input-contents">
                                        <span className="input-title">발급기관</span>
                                        <input type="text" />
                                    </div>
                                    <div className="input-contents">
                                        <span className="input-title">만료일자</span>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <button className="form-btn line-btn link-clear full-btn">연동완료</button>
                        </div>
                    </form>
                    <form className="pop-max-contents">
                        <div className="link-box border-box">
                            <span className="pop-text">고용산재보험 토탈서비스</span> 
                            <div className="link-contents">
                                <div className="logo">
                                     <img src={TotalLogo}/>
                                </div>
                                <div className="input-box">
                                    <div className="input-contents">
                                        <span className="input-title">인증서명</span>
                                        <input type="text" />
                                    </div>
                                    <div className="input-contents">
                                        <span className="input-title">발급기관</span>
                                        <input type="text" />
                                    </div>
                                    <div className="input-contents">
                                        <span className="input-title">만료일자</span>
                                        <input type="text" />
                                    </div>
                                </div>
                            </div>
                            <button className="form-btn line-btn full-btn">연동필요</button>
                        </div>
                    </form>
                    <button className="form-btn line-btn purple-btn">공동인증센터 바로가기</button>
                </div>
            </div>
        </section>
    <Outlet /></div>);
}