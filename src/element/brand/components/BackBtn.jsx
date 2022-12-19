import LeftArrow from "@/assert/icon/left-arrow.svg"
import ArrowBack from "@/assert/icon/arrow-back.svg"
import { atom, useRecoilState, useResetRecoilState } from 'recoil';

export const State = atom({key: 'Backbtn', default : null })

export function StateClear() { useResetRecoilState(State) }

export function On(Mode){

    var [state, setState] = useRecoilState(State)

    function Event(){
        if(state == null) { history.go(-1) } else { setState(null) }
    }

    function MobileUi() { return(
        <div className="header-btn-box">
            <button className="back-btn pc-hide" onClick={()=>{ Event() }}> 
                <img src= {ArrowBack} /> 
            </button>
        </div>
    )}

    function PcUi() { return(
        <div className="back-btn">
            <button className="line-btn" onClick={()=>{ Event() }}>
                <img src= { LeftArrow } />뒤로가기
            </button>
        </div>
    )}

    return( <div > { Mode == "mobile"? MobileUi() : PcUi() } </div>)

}





