import React from 'react'
import { Outlet } from 'react-router-dom';
import "@/style/index.css" 

export default function home()
{
    return(<div className= "main">
        <section className="section visual-sc">
            
            <h5 className="visual-sub-title obj-ani">
                국세 기본법 45조 2제1항
            </h5>
            
            <h1 className="visual-title obj-ani">
                5분이면 <br className= "mobile-br" /> 5년간 더 낸 세금을 <br /> 바로 찾을 수 있습니다. 
            </h1>

            <p className="text obj-ani">
                2020년 1월 법인세법이 변경되어 <br className="mobile-br" /> 
                법인세 경정청구를 납세 신고를 한 날로부터 5년이내, <br/> 
                과거 세제 혜택에 대한 누락, 자료미비 등으로 <br className="mobile-br" />
                <span className="underscore">더 납부한 세금 환급을 청구하는 제도</span>
            </p>

            <button className="btn obj-ani">
                <a href="/requestForRefund">더낸세금 바로 찾기</a>
            </button>

        </section>
        <section className="section reason-sc">

            <h2 className="section-title purple obj-ani">
                경정청구 전문 세무사와 <br className="mobile-br" />꼭! 상의해야 하는 이유
            </h2>

            <p className="text grey obj-ani">
                법인세법을 몰라서 세금의 공제 및 감면<br className="mobile-br" />  받을 수 있는 부분을 놓치는 경우가 많습니다.
            </p>

            <ul className="reason-ul">
                <li className="reason-li obj-ani">
                    <span className="quotation">“</span>
                    <p className="reason-text grey">
                        법인의 업종, 규모 등<br className="pc-br" />특성에 맞는 <br className="mobile-br" /> 공제,<br className="pc-br" />감면 요건 검토 필요
                    </p>
                </li>
            </ul>

        </section>
    <Outlet /> </div> );
}