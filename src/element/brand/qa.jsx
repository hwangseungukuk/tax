import React from 'react'
import { Outlet } from 'react-router-dom';
import LeftArrow from "@/assert/icon/left-arrow.svg"

export default function qa()
{
    return(<section className="pop-section">
    <div className="max-container">
                <div className="back-btn">
                    <button className="line-btn " onClick={()=>{ history.go(-1) }}>
                        <img src= { LeftArrow } />뒤로가기
                    </button>
                </div>
                <div className="pop-section-contents">
                        <span className="pop-title">
                            문의하기
                        </span>
                        <form className="pop-max-contents">
                              <div className="input-box">
                                <span className="input-title">이름</span>
                                <div className="input-contents">
                                    <input type="text" placeholder="이름을 입력해 주세요." />
                                </div>
                              </div>
                              <div className="input-box">
                                <span className="input-title">연락처</span>
                                <div className="input-contents">
                                    <input type="text" placeholder="010-0000-0000" /> 
                                </div>
                              </div>
                              <div className="input-box">
                                <span className="input-title">이메일</span>
                                <div className="input-contents">
                                    <input type="text" placeholder="이메일을 입력해 주세요." />
                                </div>
                              </div>
                              <div className="input-box">
                                <span className="input-title">제목</span>
                                <div className="input-contents">
                                    <input type="text" placeholder="제목을 입력해 주세요." />
                                </div>
                              </div>
                              <div className="input-box">
                                <span className="input-title">내용</span>
                                <div className="input-contents">
                                    <input className="long-txt" type="text" placeholder="내용을 입력해 주세요." />
                                </div>
                              </div>
                              <div className="input-box">
                                <span className="input-title">첨부파일</span>
                                <div className="input-contents">
                                    <input type="text" placeholder="파일명" />
                                    <button className="btn input-btn">파일찾기</button>
                                </div>
                                <span className="pop-sub-text file-guide">파일 사이즈는 20MB 이하의 jpg, png, zip 파일만 첨부 가능합니다.</span>
                              </div>
                              <button className="form-btn  line-btn  purple-btn">등록하기</button>
                        </form>
                </div>
            </div> 
    <Outlet /></section>);
}