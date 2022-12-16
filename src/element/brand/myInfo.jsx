import React from 'react'
import { Outlet } from 'react-router-dom';

import * as Func from '@/element/brand/Components/Func.jsx'

export default function myInfo()
{
    Func.BackBtnClear()
    return(<div>
        <section className="pop-section">
            <div className="max-container">
                { Func.BackBtn() }
                <div className="pop-section-contents">
                    <span className="pop-title">내정보</span>
                    <form className="pop-max-contents">
                        <div className="input-box">
                            <span className="input-title">이름</span>
                            <div className="input-contents"><input type="text" placeholder="이름을 입력해 주세요."/></div>
                        </div>
                        <div className="input-box">
                            <span className="input-title">연락처</span>
                            <div className="input-contents"><input type="text" placeholder="010-0000-0000"/></div>
                        </div>
                        <div className="input-box">
                            <span className="input-title">이메일</span>
                            <div className="input-contents"> <input type="text" placeholder="이메일을 입력해 주세요."/></div>
                        </div>
                        <div className="btn-box">
                            <button className="form-btn line-btn">회원탈퇴</button>
                            <button className="form-btn line-btn purple-btn">로그아웃</button>
                        </div>
                        <div className="input-box">
                            <div className="com-info"><option>회사정보</option></div>
                        </div>
                        <div className="input-box">
                            <span className="input-title">회사명</span>
                            <div className="input-contents"><input type="text" placeholder="이메일을 입력해 주세요." readOnly/></div>
                        </div>                              
                        <div className="input-box">
                            <span className="input-title">대표자명</span>
                            <div className="input-contents"><input type="text" placeholder="이메일을 입력해 주세요." readOnly/></div>
                        </div>                              
                        <div className="input-box">
                            <span className="input-title">사업자등록번호</span>
                            <div className="input-contents"><input type="text" placeholder="이메일을 입력해 주세요." readOnly/></div>
                        </div>                              
                        <div className="input-box">
                            <span className="input-title">법인등록번호</span>
                            <div className="input-contents"><input type="text" placeholder="이메일을 입력해 주세요."/></div>
                        </div>                              
                        <div className="input-box">
                            <span className="input-title">주소</span>
                            <div className="input-contents">
                                <input type="text" placeholder="주소 검색해 주세요."/>
                                <button className="btn input-btn">검색</button>
                            </div>
                            <div className="input-contents"><input type="text" placeholder="상세주소"/></div>
                        </div>
                        <button className="form-btn line-btn purple-btn">저장하기</button>
                    </form>
                </div>
            </div>
        </section>
    <Outlet /></div>);
}