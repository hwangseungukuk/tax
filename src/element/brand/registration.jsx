import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil';

import Dots from '@/assert/icon/dots.svg'
import Guide from '@/assert/icon/guide.svg'

import * as BackBtn from '@/Element/brand/Components/BackBtn.jsx'

export default function registration()
{
    var [step, setStep] = useRecoilState(BackBtn.State);
    var dots = []

    
    useEffect(()=>{ BackBtn.StateClear(setStep) },[])

    for(var i= 0; i < 3; i++) {
        if(step == null) { 
            switch(i) { 
                case 0:  dots.push("tab-num active"); break 
                default: dots.push("tab-num"); break
            }
        }
        else {
            if(i == step) { dots.push("tab-num active"); } else { dots.push("tab-num") }
        }
    }

    function Step0() { 
        
        function StepChagere() {
            // 버튼 눌렀을때 조건? 넣기
            setStep(1);
        }

        return( <div className="tab-box tab1 active">
            <span className="pop-title">공동인증센터 인증서등록</span>
            <div className="pop-max-contents">
                <div className="registration-box">
                    <span className="pop-sub-text">회사명 또는 사업자등록번호</span>
                    <div className="guide-box border-box">
                        <img src={Guide}/>
                        <span className="guide-text">금융사 수준의 알고리즘으로<br/>암호화되어 안전하게 관리합니다.</span>
                    </div>
                </div>
                <span className="pop-sub-text">공인인증 프로그램을 설치하셨나요? <span className="underscore purple">다운로드하기</span></span>
                <div className="btn-box">
                    <button className="form-btn line-btn">다운로드</button>
                    <button className="form-btn purple-btn line-btn" onClick={()=>{StepChagere()}}>설치완료</button>
                </div>
            </div>
        </div>)
    }

    function Step1() {
        
        function StepChagere() {
            // 버튼 눌렀을때 조건? 넣기
            setStep(2);
        }

        return( <div className="tab-box tab2 active">
            <span className="pop-title">공동인증센터 인증서등록</span>
            <div className="pop-max-contents">
                <div className="registration-box">
                    <span className="pop-sub-text">회사명 또는 사업자등록번호</span>
                    <div className="border-box">
                        <span className="pop-text">SMS로 보내드린 인증코드를 입력하면 등록을 시작합니다.</span>
                        <div className="input-box">
                            <div className="input-contents">
                                <span className="input-title">연락처</span>
                                <input type="text"/>
                                <button className="form-btn btn">인증번호 발송</button>
                            </div>
                        </div>
                        <div className="input-box">
                            <div className="input-contents">
                                <span className="input-title">인증코드</span>
                                <input type="text"/>
                                <button className="form-btn line-btn purple-btn" onClick={()=>{StepChagere()}}>확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

    function Step2() { 
        return(<div className="tab-box tab3 active">
            <span className="pop-title">공동인증센터 인증서등록</span>
            <div className="pop-max-contents">
                <div className="registration-box">
                    <span className="pop-sub-text">회사명 또는 사업자등록번호</span>
                    <div className="guide-box border-box">
                        <img src={Guide}/>
                        <span className="guide-text">공인인증서가 등록되었습니다.</span>
                    </div>
                </div>
                <button className="form-btn purple-btn line-btn">설치완료</button>
            </div>
        </div>)
    }


    return(<div>
        <section className="pop-section">
            <div className="max-container">
                { BackBtn.On() }
                <div className="pop-section-contents">
                    <div className="tab-state">
                        <span className= {`${dots[0]}`}>1</span>
                        <span className="dots"> <img src= { Dots } /> </span>
                        <span className={`${dots[1]}`}>2</span>
                        <span className="dots"> <img src= { Dots } /> </span>
                        <span className={`${dots[2]}`}>3</span>
                    </div>

                    <div className="pop-max-contents"> 
                        {{ null: Step0(), 1: Step1(), 2: Step2() }[step]} 
                    </div>
                </div>
           </div>
        </section>
    </div>);
}