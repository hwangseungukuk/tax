import React from 'react'
import { Outlet } from 'react-router-dom';

export default function NoticeContents()
{
    return(
        <div>
            <section class="pop-section">
            <div class="max-container">
                <div class="back-btn">
                    <button class="line-btn ">
                        <img src="/Tax/assert/icon/left-arrow.svg" />뒤로가기
                    </button>
                </div> 
                <div class="pop-section-contents">
                        <span class="pop-title">
                            공지사항
                        </span>
                        <div class="pop-max-contents">
                            <div class="notice-li pop-inner-header">
                                <span class="pop-inner-header-title">
                                    서비스 변경 공지 제목이 길어진다면 밑으로 내려가게 하는게 좋을까서비스 변경 공지 
                                </span>
                                <span class="pop-inner-header-date">
                                    0000-00-00
                                </span>
                            </div>
                            <div class="pop-inner-contents notice-contents">
                                [한화손해보험] 10월 장기보험 청약서 사용안내 <br/><br/>

                                1. 대상상품<br/>
                                한화 Big Plus 재산종합보험2209
                                성공하는 Owner 재산종합보험2209
                                <br/><br/>
                                2. 사용방법<br/>
                                '청약서 발행건' 限 10/31 까지 수납! 必必必 **
                                <br/><br/>
                                3. 사유<br/>
                                비특수건물 풍수재 가입시 화재기본담보 부호선택기능 추가운영

                            </div>
                            <button class="form-btn line-btn  purple-btn">목록으로 </button>
                        </div>
                </div>
            </div>
        </section>

            <Outlet />
        </div>
    );
}