import { state } from "./state.js";
import { startTimer } from "./timer.js";



const startBtn=document.querySelector(".control__btn_start");

export const initControl=()=>{
  startBtn.addEventListener("click", ()=>{

    if(state.isActive){
      clearTimeout(state.timerId);
      state.isActive=false;
      startBtn.textContent="Pause"
    }else{
      state.isActive=true;
      startBtn.textContent="Start";
      startTimer();
    }
  
})
}