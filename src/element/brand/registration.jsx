import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import LeftArrow from '@/assert/icon/left-arrow.svg'
import Dots from '@/assert/icon/dots.svg'
import Guide from '@/assert/icon/guide.svg'

///Tax/assert/icon/guide.svg
export default function registration()
{
    var [step, setStep] = useState(0);
    var dots = []

    for(var i= 0; i < 3; i++)
    {
        if(i == step) { dots.push("tab-num active"); continue; }
        dots.push("tab-num");
    }

    function StepChagere(num) {
        // 버튼 눌렀을때 조건? 넣기
        setStep(num);
    }

    function Step0() { return(
        <div className="tab-box tab1 active">
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
                    <button className="form-btn purple-btn line-btn" onClick={()=>{StepChagere(1)}}>설치완료</button>
                </div>
            </div>
        </div>)
    }

    function Step1() { return( 
        <div className="tab-box tab2 active">
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
                                <button className="form-btn line-btn purple-btn" onClick={()=>{StepChagere(2)}}>확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }

    function Step2() { return(
        <div className="tab-box tab3 active">
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
                <div className="back-btn">
                <button class="line-btn back-btn" onClick={()=>{ history.go(-1) }}>
                    <img src={LeftArrow} />뒤로가기
                </button>
                </div>
                <div className="pop-section-contents">
                    <div className="tab-state">
                        <span className= {`${dots[0]}`}>1</span>
                        <span className="dots"> <img src= { Dots } /> </span>
                        <span className={`${dots[1]}`}>2</span>
                        <span className="dots"> <img src= { Dots } /> </span>
                        <span className={`${dots[2]}`}>3</span>
                    </div>

                    <div className="pop-max-contents"> {{
                        0: Step0(),
                        1: Step1(),
                        2: Step2()
                    }[step]} </div>
                </div>
           </div>
        </section>
    <Outlet/></div>);
}