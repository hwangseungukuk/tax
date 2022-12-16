import LeftArrow from "@/assert/icon/left-arrow.svg"
import ArrowBack from "@/assert/icon/arrow-back.svg"

export function SetBackBtn(set,index) { BackBtn_.setInstance(set,index) }

export function BackBtnClear() { BackBtn_.setInstance(null,null) }

export function BackBtn(Mode){

    function Event(){
        var singleton = BackBtn_.getInstance();
        if(singleton.setState == null) { history.go(-1) }
        else { singleton.setState(singleton.setIndex) }
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

class BackBtn_{
    static #instance;
    static setState;
    static setIndex;

    static setInstance(set,index) 
    { 
        if (!this.instance) { this.instance = new BackBtn_(); } 
        this.instance.setState = set; 
        this.instance.setIndex = index; 
    }

    static getInstance() 
    { 
        if (!this.instance) { this.instance = new BackBtn_(); } 
        return this.instance; 
    }
}

//로그인 부분 




