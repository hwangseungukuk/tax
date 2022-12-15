import { useNavigate } from 'react-router-dom'
import LeftArrow from "@/assert/icon/left-arrow.svg"

export function BackBtn(set = null, index = null) {
    function BtnEvent(){
        if(set == null) { history.go(-1) } else { set(index) }
    }

    return(<div className="back-btn">
            <button className="line-btn " onClick={()=>{ BtnEvent() }}>
                <img src= { LeftArrow } />뒤로가기
            </button>
    </div>)
}

export function Nav(adrass){
    var navigate = useNavigate();
    adrass == "/" ? navigate(adrass) : navigate("brand/"+adrass)
}
