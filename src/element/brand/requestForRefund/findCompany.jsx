import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'

import Dots from '@/assert/icon/dots.svg'

import * as BackBtn from '@/Element/brand/Components/BackBtn.jsx'


export default function FindCompany()
{
    var [ step, setStep ] = useRecoilState(BackBtn.State); 
    var dots = []
    var count = 0;

    for(var i= 0; i < 5; i++) {
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

    const DotsList = dots.map((index,key)=>{
        count++ 
        return(<div key={key} className="tab-state">
            <span className= {index}>{count}</span>
            { dots.length != count? <span className="dots"> <img src= { Dots } /> </span> : <div/> }
        </div>)
    })

    function Step1() { 
        function StepChagere() {
            setStep(1);
        }

        return(<div className="pop-section-contents tab-box tab1 active">
            <span className="pop-title">회사 정보 찾기</span>
            <form className="pop-max-contents">
                <div className="input-box">
                    <span className="input-title">회사명 또는 사업자등록번호</span>
                    <div className="input-contents">
                        <input type="text" placeholder="검색해 주세요"/>
                        <button className="btn input-btn">조회</button>
                    </div>
                </div>
            </form>
            <div className="no-search pop-sub-text">
                찾는 회사가 없으면 직접 입력해주세요.
                <span className="underscore purple">직접입력하기</span>
            </div>
            <div className="search-list-box">
                <span className="pop-sub-text line-grey">조회 결과에서 찾으시는 회사를 선택하세요.</span>
                <ul className="search-ul">
                    <li className="search-li">
                        <div className="search-info">
                            <div className="row">
                                <span className="pop-text company-name">스마트비즈(주)</span>
                                <span className="col-line"></span>
                                <span className="business-num pop-grey pop-text">573-81-02048</span>
                            </div>
                            <span className="name pop-sub-text">김태형</span>
                            <span className="address pop-sub-text pop-grey">[06657] 서울 서초구 반포대로21길 3 , IWHA B1(서초동, 이화빌딩)</span>
                        </div>
                        <button className="search-pick purple" onClick={()=>{StepChagere()}}>선택</button>
                    </li>
                </ul>
            </div>
        </div>)
    }

    function Step2() {
        function StepChagere() {
            // 조건
            setStep(2);
        }

        return(<div className="pop-section-contents tab-box tab2 active">
            <span className="pop-title">회사 정보 확인</span>
            <form className="pop-max-contents">
                <div className="input-box">
                    <span className="input-title">회사명</span>
                    <div className="input-contents"><input type="text" placeholder="스마트비즈(주)" readOnly/></div>
                </div>
                <div className="input-box">
                    <span className="input-title">대표자명</span>
                    <div className="input-contents"><input type="text" placeholder="김태형" readOnly/></div>
                </div>
                <div className="input-box">
                    <span className="input-title">사업자등록번호</span>
                    <div className="input-contents"><input type="text" placeholder="000-00-00000" readOnly/></div>
                </div>
                <div className="input-box">
                    <span className="input-title">법인등록번호</span>
                    <div className="input-contents"><input type="text" placeholder="직접 입력해 주세요."/></div>
                </div>
                <div className="input-box">
                    <span className="input-title">주소</span>
                    <div className="input-contents">
                        <input type="text" placeholder="주소 검색해 주세요"/>
                        <button className="btn input-btn">검색</button>
                    </div>
                    <div className="input-contents"><input type="text" placeholder="상세주소"/></div>
                </div>
                <button className="form-btn  line-btn  purple-btn" onClick={()=>StepChagere()}>등록하기</button>
            </form>
        </div>)

    }
    
    function Step3() {
        function StepChagere() {
            setStep(3);
        }

        return(<div className="pop-section-contents tab-box tab3 active">
                <span className="pop-title">공인인증서 로그인</span>
                <div className="certification-login-waiting">
                    <div className="indicator">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                    </div>
                    <span className="indicator-text">
                        <span className="purple">지난 5년간의 예상 환급금을 계산중입니다.</span><br/>
                        잠시만 더 기다려주세요!
                    </span>
                </div>
                <button onClick={()=>{StepChagere()}}>임시 다음으로</button>
        </div>)
    }

    function Step4() {
        function StepChagere() {    
            // 조건
            setStep(4);
        }

        return(<div className="pop-section-contents tab-box tab4 active">
            <span className="pop-title">예상 환급액 조회</span>
            <div className="pop-max-contents">
                    <div className="refund-box">
                        <span className="pop-sub-text">경정청구 결과 나의 예상 환급액은</span>
                        <div className="refund-amount">
                            <span className="purple"><span className="count">9,999,999,999</span>원</span><br/>
                            환급 받을 수 있습니다.
                    </div>
                </div>
                <div className="table-box">
                    <span className="table-unit">단위 : 원</span>
                    <div className="table">
                        <div className="table-row table-row-header">
                            <div className="th">구분</div>
                            <div className="th">경정청구액</div>
                        </div>
                        <div className="table-row">
                            <div className="td">2017년</div>
                            <div className="td">9,999</div>
                        </div>
                        <div className="table-row">
                            <div className="td">2018년</div>
                            <div className="td">9,999</div>
                        </div>
                        <div className="table-row">
                            <div className="td">2019년</div>
                            <div className="td">9,999</div>
                        </div>
                        <div className="table-row">
                            <div className="td">2020년</div>
                            <div className="td">9,999</div>
                        </div>
                        <div className="table-row">
                            <div className="td">2021년</div>
                            <div className="td">9,999</div>
                        </div>
                    </div>
                </div>
                <button className="form-btn line-btn purple-btn" onClick={()=>StepChagere()}>경정청구 신청하기</button>
            </div>
        </div>)
    }

    function Step5() {

        var [ clear, setClear ] = useState(false);

        function main() {
            return(<div className="pop-section-contents tab-box tab5 active">
                <span className="pop-title">경정청구 신청을 위한 설문</span>
                <div className="pop-max-contents survey">
                    <div className="survey-box">
                        <label className="survey-input survey-input-title">
                            <span className="pop-sub-text">※ 이월결손금공제제한</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="checkbox"/>
                        </label>
                    </div>
                    <div className="survey-box">
                        <label className="survey-input survey-input-title">
                            <span className="pop-sub-text">✔ 창업중소기업에 대한 법인세감면(조특법§6) </span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">창업중소기업업종해당여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">	수도권여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">	수도권과밀억제권역여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">	벤처기업여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">	벤쳐기업확인일자</span><input type="date"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">	벤쳐기업취소일자</span><input type="date"/>
                        </label>
                    </div>
                    <div className="survey-box">
                        <label className="survey-input survey-input-title">
                            <span className="pop-sub-text">※ 이월결손금공제제한</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="checkbox"/>
                        </label>
                    </div>
                    <label className="survey-box">
                        <label className="survey-input survey-input-title">
                            <span className="pop-sub-text">※ 이월결손금공제제한</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="date"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="checkbox"/>
                        </label>
                        <label className="survey-input">
                            <span className="pop-sub-text">이월결손금 공제제한 여부</span><input type="checkbox"/>
                        </label>
                    </label>
                </div>
                <button className="form-btn line-btn purple-btn" onClick={()=>setClear(true)}>경정청구 신청완료</button>
            </div>)
        }

        function sub(){
            return(<div className="pop-section-contents tab-box tab6 active">
                <span className="pop-title">
                    예상 환급금 신청완료!
                    <span className="pop-sub-title pop-grey">경정청구 전문 세무사가 직접 검토 후 안내해 드리겠습니다.</span>
                </span>
                <div className="pop-max-contents"> 
                    <div className="refund-box">
                        <span className="pop-sub-text">경정청구 결과(예상 환급금) 안내</span>  
                        <div className="refund-amount">
                            <span className="purple"><span className="count">9,999,999,999</span>원</span><br/>
                            환급 예상 소요시간 1일 입니다.
                        </div>
                    </div>
                    <div className="table-box">
                        <span className="table-unit">단위 : 원</span>
                        <div className="table">
                            <div className="table-row table-row-header">
                                <div className="th">구분</div><div className="th">경정청구액</div>
                            </div>
                            <div className="table-row">
                                <div className="td">2017년</div><div className="td">9,999</div>
                            </div>
                            <div className="table-row">
                                <div className="td">2018년</div><div className="td">9,999</div>
                            </div>
                            <div className="table-row">
                                <div className="td">2019년</div><div className="td">9,999</div>
                            </div>
                            <div className="table-row">
                                <div className="td">2020년</div><div className="td">9,999</div>
                            </div>
                            <div className="table-row">
                                <div className="td">2021년</div><div className="td">9,999</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>)
        }
        return(<div>{ !clear ? main() : sub() }</div>)
    }


    return(<div className="main">
        <section className="pop-section">
            <div className="max-container">
                { BackBtn.On() }
                <div className='pop-section-contents'>
                    <div className="tab-state"> {DotsList} </div>
                </div>
                {{ null: Step1(), 1: Step2(), 2: Step3(), 3: Step4(), 4:Step5() }[step]} 
            </div>
        </section>
    </div>);
}