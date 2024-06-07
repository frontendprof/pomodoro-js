import { state } from "./state.js";


const minsNumber=document.querySelector(".time__minutes");
const secNumber=document.querySelector(".time__seconds");

const showTimer=(seconds)=>{
  minsNumber.textContent=Math.floor(seconds/60).toString().padStart(2,"0");

  secNumber.textContent=(seconds%60).toString().padStart(2,"0");
}



export const startTimer=()=>{
  state.timeLeft=state.timeLeft-1;
 
   showTimer(state.timeLeft);
 


  if(state.timeLeft>0 && state.isActive){
    state.timerId=setTimeout(startTimer, 1000);
  }

   if(state.timeLeft<0){
    alarm();
  }
}