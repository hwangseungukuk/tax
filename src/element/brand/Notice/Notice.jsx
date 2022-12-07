import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import LeftArrow from "@/assert/icon/left-arrow.svg"
import RightArrow from "@/assert/icon/right-arrow.svg"
import New from '@/assert/icon/new.svg'

export default function Notice()
{
    // 보는 페이지 state로 관리 
    return(<div>
    <section className="pop-section">
            <div className="max-container">
                <div className="back-btn">
                    <button className="line-btn " onClick={()=>{ history.go(-1) }}>
                    <img src= { LeftArrow } />뒤로가기
                    </button>
                </div>
                <div className="pop-section-contents">
                        <span className="pop-title">
                            공지사항
                        </span>
                        <div className="pop-max-contents">
                            <ul className="notice-ul">
                                {/* 여기다가 공지글 펑션 */}
                                <li className="notice-li">
                                    <span className="notice-title">
                                        <span className="underscore">서비스 변경 공지 제목이 길어진다면 밑으로 내려가게 하는게 좋을까서비스 변경 공지 </span>
                                        <span className="new"><img src={ New } /></span>
                                    </span>
                                    <span className="notice-date">0000-00-00</span>
                                    <button className="arrow-btn"><img src= {RightArrow} /></button>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </section>
    <Outlet/></div>);
}