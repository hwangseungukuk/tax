import { useNavigate } from 'react-router-dom'
import LeftArrow from "@/assert/icon/left-arrow.svg"

export function BackBtn()
{
    return(
        <div className="back-btn">
            <button className="line-btn " onClick={()=>{ history.go(-1) }}>
                <img src= { LeftArrow } />뒤로가기
            </button>
        </div>
    )
}

export function StateBtn(setState, index)
{
    return(
        <div className="back-btn">
            <button className="line-btn " onClick={()=>{ history.go(-1) }}>
                <img src= { LeftArrow } />뒤로가기
            </button>
        </div>
    )
}
