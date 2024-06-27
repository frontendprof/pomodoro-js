import { alarm } from "./alarm.js";
import { state } from "./state.js"

const minDigit=document.querySelector(".time__minutes");
const secDigit=document.querySelector(".time__seconds");


const showTimer=(seconds)=>{
  minDigit.textContent=Math.floor(seconds/60).toString().padStart(2,"0")
  secDigit.textContent=(seconds%60).toString().padStart(2,"0")

}


export const startTimer=()=>{
  state.timeLeft--;

  showTimer(state.timeLeft)

  if(state.timeLeft>0 && state.isActive){
    state.timerId=setTimeout(startTimer, 1000);
  }

  if(state.timeLeft<0){
    alarm();
  }
}