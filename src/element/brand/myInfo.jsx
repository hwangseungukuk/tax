import React from 'react'
import { Outlet } from 'react-router-dom';

import * as Func from '@/element/brand/Components/Func.jsx'

export default function myInfo()
{
    return(<div>
        <section class="pop-section">
            <div class="max-container">
                { Func.BackBtn() }
                <div class="pop-section-contents">
                    <span class="pop-title">내정보</span>
                    <form class="pop-max-contents">
                        <div iv class="input-box">
                            <span class="input-title">이름</span>
                            <div class="input-contents"><input type="text" placeholder="이름을 입력해 주세요."/></div>
                        </div>
                        <div class="input-box">
                            <span class="input-title">연락처</span>
                            <div class="input-contents"><input type="text" placeholder="010-0000-0000"/></div>
                        </div>
                        <div class="input-box">
                            <span class="input-title">이메일</span>
                            <div class="input-contents"> <input type="text" placeholder="이메일을 입력해 주세요."/></div>
                        </div>
                        <div class="btn-box">
                            <button class="form-btn line-btn">회원탈퇴</button>
                            <button class="form-btn line-btn purple-btn">로그아웃</button>
                        </div>
                        <div class="input-box">
                            <div class="com-info"><option>회사정보</option></div>
                        </div>
                        <div class="input-box">
                            <span class="input-title">회사명</span>
                            <div class="input-contents"><input type="text" placeholder="이메일을 입력해 주세요." readonly/></div>
                        </div>                              
                        <div class="input-box">
                            <span class="input-title">대표자명</span>
                            <div class="input-contents"><input type="text" placeholder="이메일을 입력해 주세요." readonly/></div>
                        </div>                              
                        <div class="input-box">
                            <span class="input-title">사업자등록번호</span>
                            <div class="input-contents"><input type="text" placeholder="이메일을 입력해 주세요." readonly/></div>
                        </div>                              
                        <div class="input-box">
                            <span class="input-title">법인등록번호</span>
                            <div class="input-contents"><input type="text" placeholder="이메일을 입력해 주세요."/></div>
                        </div>                              
                        <div class="input-box">
                            <span class="input-title">주소</span>
                            <div class="input-contents">
                                <input type="text" placeholder="주소 검색해 주세요."/>
                                <button class="btn input-btn">검색</button>
                            </div>
                            <div class="input-contents"><input type="text" placeholder="상세주소"/></div>
                        </div>
                        <button class="form-btn line-btn purple-btn">저장하기</button>
                    </form>
                </div>
            </div>
        </section>
    <Outlet /></div>);
}