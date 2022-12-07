import React from 'react'
import { Outlet } from 'react-router-dom';
import LeftArrow from "@/assert/icon/left-arrow.svg";

export default function termsOfService()
{  //    history.go(-1);
    //    console.log('asd')
    return(<div className="main">
        <section className="pop-section">
            <div className="max-container">
                <div className="back-btn">
                    <button className="line-btn" onClick={()=>{history.go(-1)}}>
                        <img src={LeftArrow}/>뒤로가기
                    </button>
                </div>
                <div className="pop-section-contents">
                    <span className="pop-title">
                        서비스이용약관
                    </span>
                        <div className="pop-max-contents">
                            <div className="terms-box">
                                <div className="pop-inner-header">
                                    <span className="pop-inner-header-title">
                                        상담 신청 관련 개인정보 수집 및 이용에 대한 동의
                                    </span>
                                    <span className="pop-sub-text">
                                        스마트비즈(주)의 서비스 이용자 및 이용 희망자들에게 상담 및 세무, 회계 서비스 등을  <br className="pc-br"/>
제공하기 위하여 다음과 같이 명시적 동의를 받아 개인정보를 수집·이용하고자 합니다.
                                    </span>
                                </div>
                                <div className="pop-inner-contents">
                                    <span className="txt-14-600">1. 개인정보의 수집·이용 목적</span>
                                    <span className="txt-13 m-b-10">스마트비즈(주)가 제공하는 정식 서비스 또는 부가서비스를 이용 희망자의 전자우편, 전화, SMS, 카카오톡 등의 방법으로 제공</span>
                                    <span className="txt-14-600">2. 수집·이용할 개인정보의 내용</span>
                                    <span className="txt-13 m-b-10">이용 희망자의 성명, 이메일 주소, 휴대전화번호</span>
                                    <span className="txt-14-600">3. 개인정보의 보유·이용 기간</span>
                                    <span className="txt-13 m-b-10">이용자의 이메일 주소와 휴대전화번호는 스마트비즈(주)의 운영 기간동안 보유, 이용되며,
                                        이용자가 스마트비즈(주)에서 제공하는 부가 서비스 및 맞춤식 서비스를 거부하는 의사를밝힐 경우 지체 없이 파기합니다.</span>
                                        <span className="txt-13">* 이용자는 스마트비즈(주)가 제공하는 서비스의 수신 관련 동의를 자유롭게 거부하실 수 있습니다. <br/> 하지만 동의를 거부하는 경우 스마트비즈(주)의 이용자 맞춤형 서비스에 관한 정보와 부가서비스 정보를 제공받으실 수 없습니다. <br/> <br/> 따라서 스마트비즈(주)가 제공하는 이용자 맞춤형 서비스를 이용하시길 원하신다면, <br/> 본 개인정보 수집, 이용 및 이벤트정보 수신에 동의하여 주시기 바랍니다.</span>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    <Outlet /> </div>);
}