import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';

import * as Func from '@/element/brand/Components/Func.jsx'
import LeftArrow from "@/assert/icon/left-arrow.svg"
import RightArrow from "@/assert/icon/right-arrow.svg"
import New from '@/assert/icon/new.svg'

//제이슨 들고오기 
import Dummy from '@/Dummy.json'

export default function Notice()
{    
    var [look, setLook] = useState(null);

    var dataBase = Dummy.Notice
    var num = 0;

    const PostList = dataBase.map((index,key)=>{
        num++;
        return(
            <li className="notice-li" key={key} onClick={()=>{setLook(num-1)}}>
                <span className="notice-title">
                    <span className="underscore">{index.underscore}</span>
                    { index.new == true? <span className="new"><img src={ New } /></span>: <div/> }
                </span>
                <span className="notice-date">{index.noticeDate}</span>
                <button className="arrow-btn"><img src= {RightArrow} /></button>
            </li>
    )})

    const Post = () => {return(<div>
        <div className="notice-li pop-inner-header">
            <span className="pop-inner-header-title">{dataBase[look].underscore}</span>
            <span className="pop-inner-header-date">{dataBase[look].noticeDate}</span>
        </div>
        <div className="pop-inner-contents notice-contents">{dataBase[look].noticeContents}</div>
        <button className="form-btn line-btn  purple-btn" onClick={()=>{setLook(null)}}>목록으로</button>
    </div>)}

    return(<div>
        <section className="pop-section">
            <div className="max-container">
                { 
                    look == null? Func.BackBtn() 
                    :<div className="back-btn">
                        <button className="line-btn " onClick={()=>{ setLook(null) }}>
                            <img src= { LeftArrow } />뒤로가기
                        </button>
                    </div>  
                }
                <div className="pop-section-contents">
                        <span className="pop-title"> 
                            공지사항
                        </span>
                        <div className="pop-max-contents">
                            <ul className="notice-ul"> 
                                { look == null? PostList : Post() } 
                            </ul>
                        </div>
                </div>
            </div>
        </section>
    <Outlet/></div>);
}