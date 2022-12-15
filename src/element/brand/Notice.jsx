import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';

import * as Func from '@/element/brand/Components/Func.jsx'
import LeftArrow from "@/assert/icon/left-arrow.svg"
import RightArrow from "@/assert/icon/right-arrow.svg"
import New from '@/assert/icon/new.svg'

import Dummy from '@/Dummy.json'

export default function Notice()
{
    var [look, setLook] = useState(null);
    var [list, setList] = useState(10);
    var dataBase = Dummy.Notice.slice(0,list);
    var num = 0;


    const ListVulme = () => {
        if(list == Dummy.Notice.length) { return; }
        var max = Math.floor(document.querySelectorAll('.notice-li')[list-1].getBoundingClientRect().bottom)
        var box = Math.floor(document.querySelectorAll('.pop-max-contents')[0].getBoundingClientRect().bottom)

        if(max == box){ setList(list+10 > Dummy.Notice.length ? Dummy.Notice.length : list+10) }
    }

    const PostList = dataBase.map((index,key)=>{ 
        num++; return(
        <li className="notice-li" onClick={()=>setLook(num-1)} key={key}>
            <span className="notice-title">
                <span className="underscore">{index.underscore}</span>
                { index.new ?<img src={New}/> :<div/> }
            </span>
            <span className="notice-date">{index.noticeDate}</span>
            <button className="arrow-btn"><img src={RightArrow}/></button>
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
                { look == null? Func.BackBtn() : Func.BackBtn(setLook,null) }
                <div className="pop-section-contents">
                        <span className="pop-title"> 공지사항</span>
                        <div className="pop-max-contents">
                            <ul className="notice-ul" onScroll={()=>ListVulme()}> { look == null? PostList : Post() } </ul>
                        </div>
                </div>
            </div>
        </section>
    <Outlet/></div>);
}