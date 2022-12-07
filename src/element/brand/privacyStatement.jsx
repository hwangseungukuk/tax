import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import LeftArrow from "@/assert/icon/left-arrow.svg"

export default function privacyStatement()
{
    
    return( <div>
        <section className="pop-section">
            <div className="max-container">
                <div className="back-btn">
                    <button className="line-btn" onClick={()=>{ history.go(-1) }}>
                        <img src= { LeftArrow } />뒤로가기
                    </button>
                </div>
                <div className="pop-section-contents">
                    <span className="pop-title"> 개인정보처리방침 </span>
                    <div className="pop-max-contents">
                        <div className="terms-box">
                            <div className="pop-inner-header">
                                <span className="pop-inner-header-title">개인정보처리방침의목적 </span>
                                <span className="txt-13">
                                    모든 개인정보는 법률에 따라 정보주체의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리하기 위하여 본 개인정보처리방침을 마련하여 준수하고 있습니다. <br/>
                                    회사는 모든 개인정보를 소중히 다루며, 이용자 모두가 안심하고 서비스를 이용할 수 있도록 최선의 노력을 다할 것을 약속 드립니다.
                                 </span>
                            </div>

                            <div className="pop-inner-contents">
                                <div className="m-b-30">
                                    
                                    <span className="txt-14 m-b-7">
                                        1. 회사의 노력
                                    </span>
                                    
                                    <span className="txt-13 m-b-5">
                                        구체적으로 회사는 개인정보 처리와 관련하여 다음의 노력을 하고 있습니다.
                                    </span>
                                    
                                    <span className="txt-13 m-b-5">
                                        ○ 이용자의개인정보를암호화하고 있습니다.
                                    </span>
                    
                                    <span className="txt-13 m-b-7">
                                        ㆍ정보주체의 개인정보는 비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수 있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일 잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다.
                                    </span>
            
                                    <span className="txt-13 m-b-5">
                                        구체적으로 회사는 개인정보 처리와 관련하여 다음의 노력을 하고 있습니다.
                                    </span>

                                    <span className="txt-13 m-b-5">
                                        ○ 해킹이나 컴퓨터 바이러스로부터 보호하기 위하여 방어 시스템을 갖추고 있습니다.
                                    </span>
                            
                                    <span className="txt-13 m-b-7">
                                        ㆍ회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여 보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터 접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및 차단하고 있습니다.
                                    </span>
                    
                                    <span className="txt-13 m-b-5">
                                        ○ 이용자의 개인정보에 접근할 수 있는 사람을 최소화하고 교육하고 있습니다.
                                    </span>
                        
                                    <span className="txt-13 m-b-7">
                                        ㆍ개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고 있으며 개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에 보관하고 있습니다.
                                    </span>
            
                                    <span className="txt-13 m-b-5">
                                        ○ 임직원에게 이용자의 개인정보 보호에 대해 정기적인 교육을 실시하고 있습니다.
                                    </span>
                                
                                    <span className="txt-13 m-b-7">
                                        ㆍ개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화 하여 개인정보를 관리하는 대책을 시행하고 있습니다.
                                    </span>
                
                                    <span className="txt-13 m-b-5">
                                        ○ 정기적인 자체 감사를 실시하고 있습니다.
                                    </span>
        
                                    <span className="txt-13 m-b-7">
                                        ㆍ개인정보 취급 관련 안정성 확보를 위해 정기적(반기 1회)으로 자체 감사를 실시하고 있습니다.
                                    </span>                               

                                </div>

                                <div className="m-b-30">
                            
                                    <span className="txt-14 m-b-7">
                                        2. 개인정보수집및이용
                                    </span>
                            
                                    <span className="txt-13 m-b-5">
                                        ○ 수집항목
                                    </span>
                
                                    <span className="txt-13 m-b-7">
                                        회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 어플리케이션을 통해 아래와 같은 서비스를 제공하기 위하여 필요한 최소한의 개인 정보를 수집하고 있습니다.
                                    </span>
                                
                                </div>

                                <table className="table m-b-10">
                                    <thead>
                                        <tr>
                                            <th>수집및이용 목적</th>
                                            <th width="50">수집 목적</th>
                                            <th colSpan="2">수집항목</th> 
                                        </tr>
                                    </thead>
                                            
                                    <tbody>
                                    
                                    <tr>
                                        <td>홈페이지 회원가입 및 관리</td>
                                            <td>필수</td>
                                            <td>회원 가입의사 확인, 회원제 서비스 제공</td>
                                            <td>이름, 생년월일, 이메일, 휴대폰번호, 로그인 아이디결제 내역</td>
                                    </tr>
                                    
                                    <tr>
                                        <td></td>
                                        <td>선택</td>
                                        <td>추가 서비스 제공 등</td>
                                        <td>성별, 주소 (소셜로그인) 카카오톡 계정 Key 값</td>
                                    </tr>

                                    <tr>
                                        <td>본인인증</td>
                                        <td>필수</td>
                                        <td>본인인증, 연령인증 등 제한적 본인확인제 시행에 따른 본인확인 </td>
                                        <td>이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복가입확인정보(DI) </td>
                                    </tr>
                                    
                                    <tr>
                                        <td>법정대리인 동의 </td>
                                        <td>필수</td>
                                        <td>서비스 부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인</td>
                                        <td>법정대리인 정보(이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복가입확인정보(DI)) </td>
                                    </tr>

                                    <tr>
                                        <td>더낸세금 서비스 제공</td>
                                        <td>필수</td>
                                        <td>국세청, 고용보험 등으로부터 세금 고지내역 및 납부 내역 등 조회 등</td>
                                        <td>주민등록번호(외국인등록번호), 주소, 공인인증서, 공인인증서 비밀번호</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>세무 컨설팅(세무대리) 서비스 제공</td>
                                        <td>필수</td>
                                        <td>국세청, 고용보험 등으로부터 세금 고지내역 및 납부 내역 등 조회</td>
                                        <td>주민등록번호(외국인등록번호), 주소, 공인인증서, 공인인증서 비밀번호, 은행 계좌 입・출금 내역</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>기장 컨설팅 서비스 제공</td>
                                        <td>필수</td>
                                        <td>국세청, 고용보험 등으로부터 세금 고지내역 및 납부 내역 등</td>
                                        <td>대표자명, 대표자 생년월일, 대표자 고유식별정보</td>
                                    </tr>

                                    <tr>
                                        <td>기타 세무 서비스 제공</td>
                                        <td>필수</td>
                                        <td>사회보험통합징수포털에서 4대 보험료 고지 및 납부 내역, 고용산재보험 토탈서비스에서 근로자 고용 정보 현황 조회 등</td>
                                        <td>주민등록번호(외국인등록번호), 주소, 공인인증서, 공인인증서 비밀번호, 은행 계좌 입・출금 내역</td>
                                    </tr>

                                    <tr>
                                        <td>사업 지원금 조회</td>
                                        <td>필수</td>
                                        <td>고용산재보험 토탈서비스에서 근로자 고용 정보 현황 조회 등</td>
                                        <td>공인인증서, 공인인증서 비밀번호, 은행 계좌 입・출금 내역</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>지로납부</td>
                                        <td>필수</td>
                                        <td>서비스 이용료 등 결제</td>
                                        <td>(공통) 계좌은행, 계좌번호, 예금주명, 공인인증서, 공인인증서 비밀번호 (개인사업자) 대표자명, 대표자 생년월일, 대표자 고유식별번호</td>
                                    </tr>
                                                
                                    <tr>
                                        <td>CMS 자동이체</td>
                                        <td>필수</td>
                                        <td>서비스 이용료 등 결제</td>
                                        <td>(공통) 계좌은행, 계좌번호, 예금주명, 공인인증서, 공인인증서 비밀번호 (개인사업자) 대표자명, 대표자 생년월일, 대표자 고유식별번호</td>
                                    </tr>
                                                
                                    <tr>
                                        <td>세금계산서 발행 시</td>
                                        <td>필수</td>
                                        <td>계산서 발행</td>
                                        <td>사업자등록번호</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>환불처리시</td>
                                        <td>필수</td>
                                        <td>결제 금액 환불</td>
                                        <td>계좌은행, 계좌번호, 예금주명, 이메일</td>
                                                
                                    </tr>
                                    
                                    <tr>
                                        <td>고객센터 이용시</td>
                                        <td>필수</td>
                                        <td>민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등</td>
                                        <td>문의 및 상담 내용에 포함된 개인정보</td>
                                    </tr>

                                    <tr>
                                        <td>통계 작성 및 연구 등</td>
                                        <td>필수</td>
                                        <td>서비스 및 콘텐츠 관련 통계 작성(상업적 목적 포함) 및 연구(산업적 연구 포함) 등</td>
                                        <td>이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복가입확인정보(DI),소속회사의 명칭/ 규모/산업군/주소, 이메일</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>마케팅 및 광고에 활용</td>
                                        <td>필수</td>
                                        <td>맞춤형 광고 제공 등</td>
                                        <td>이름, 생년월일, 휴대폰번호, 접속빈도, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복가입확인정보(DI)</td>
                                    </tr>
                                </tbody>
                            </table>                            
                            
                            <span className="txt-13 m-b-5">○ 수집 방법</span> 
                            <span className="txt-13 m-b-7">회사는 다음과 같은 방법을 통해 개인정보를 수집합니다.</span>
                            <span className="txt-13 m-b-5">ㆍ 회원가입 및 서비스 이용 과정에서 이용자가 개인정보 수집에 대해 동의를 하고 직접 정보를 입력하는 경우</span>
                            <span className="txt-13 m-b-5">ㆍ 회원가입 및 서비스 이용을 위하여 이용자가 회사에게 직접 개인정보 조회 등에 대한 권한을 위임하면 회사가 직접 국세청, 고용보험, 은행 및 카드사 인터넷뱅킹 사이트 등을 조회하는 경우</span>
                            <span className="txt-13 m-b-10">ㆍ 제휴 서비스 또는 단체로부터 개인정보를 제공받은 경우</span>
                            <span className="txt-13 m-b-5">○ 보관 기간</span>
                            <span className="txt-13 m-b-7">회사는 이용자의 서비스 마지막 이용일 또는 회원 탈퇴 후 1년이 되는 시점 또는 법령에 따른 보존 기간이 경과되는 시점에 보관하던 해당 이용자의 모든 개인정보를 삭제합니다.</span>
                            <span className="txt-13 m-b-7"> 법령에 따라 일정 기간 보관해야 하는 개인정보 및 해당 법령은 아래 표와 같습니다.</span>
                            
                            <table className="table m-b-10">
                                
                                <thead>
                                    <tr>
                                        <th>보존항목</th>
                                        <th >근거법령</th>
                                        <th>보존기간</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>계약 또는 청약철회 등에 관한 기록</td>
                                        <td>전자상거래 등에서의 소비자 보호에 관한 법률</td>
                                        <td>5년</td>
                                                </tr>
                                                <tr>
                                                    <td>대금결제 및 재화 등의 공급에 관한 기록

                                                    </td>
                                                    <td></td>
                                                    <td>5년</td>
                                                </tr>
                                                <tr>
                                                    <td>소비자의 불만 또는 분쟁처리에 관한 기록

                                                    </td>
                                                    <td></td>
                                                    <td>3년

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>표시/광고에 관한 기록

                                                    </td>
                                                    <td></td>
                                                    <td>6개월

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>세금계산서 발행 등 세법이 규정하는 모든 거래에 관한 장부 및 증빙서류

                                                    </td>
                                                    <td>국세기본법

                                                    </td>
                                                    <td>5년

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>전자금융 거래에 관한 기록

                                                    </td>
                                                    <td>전자금융거래법

                                                    </td>
                                                    <td>5년

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>서비스 방문 기록

                                                    </td>
                                                    <td>통신비밀보호법

                                                    </td>
                                                    <td>3개월

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>신용정보의 수집/처리 및 이용 등에 관한 기록 보존



                                                    </td>
                                                    <td>신용정보의 이용 및 보호에 관한 법률



                                                    </td>
                                                    <td>3년

                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    <Outlet /> </div> );
}