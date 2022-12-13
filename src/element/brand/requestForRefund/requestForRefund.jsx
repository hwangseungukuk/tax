import { Outlet, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as Func from '@/element/brand/Components/Func.jsx'
import LeftArrow from "@/assert/icon/left-arrow.svg"

export default function RequestForRefund()
{
    var [kakao, setKakao] = useState(null)
    var navigate = useNavigate();

    function KakaoBtn()
    {
        navigate("/brand/requestForRefund/findCompany")
    }

    function Main() { return(<div className='pop-section-contents'>
        <span className="pop-title">
            5분이면 5년간<span className="purple">더 낸 세금을</span><br/>
            바로 찾을 수 있습니다.
        </span>
        <button className="sub-btn btn" onClick={()=>{setKakao("Corporation")}}>법인사업자로 환급금 찾기</button>
        <button className="sub-btn btn" onClick={()=>{setKakao("Sole")}}>개인사업자로 환급금 찾기</button>
    </div>)}

    function Sub() { return(<div className="pop-section-contents">
        <span className="pop-title">
            환급금을 확인하려면<br/>
            <span className="purple">간편인증</span>이 필요합니다.
        </span>
        <button className="sub-btn btn kakao" onClick={()=>{KakaoBtn()}}>카카오계정으로 로그인</button>
    </div>)}

    return( <div>
        <section className="pop-section">
            <div className="max-container">
                { 
                    kakao == null? Func.BackBtn() 
                    :<div className="back-btn">
                        <button className="line-btn " onClick={()=>{ setKakao(null) }}>
                            <img src= { LeftArrow } />뒤로가기
                        </button>
                    </div>
                }
                { kakao == null? Main() : Sub() }
            </div>  
        </section>
    <Outlet/></div> );
}


