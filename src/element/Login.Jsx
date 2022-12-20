import { atom, useResetRecoilState, useRecoilValue } from 'recoil';

export const State = atom({
    key: 'LoginInOut', 
    default : { 
        Vision: null,
        Id: null
    } 
})

export const Check = () => { return useRecoilValue(State).Id == null? false : true }