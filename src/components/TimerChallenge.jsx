import { useState,useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title,targetTime}){
    const [timeRemaining,setTimeRemaining]=useState(targetTime * 1000);
    const timerIsActive =timeRemaining>0 && timeRemaining<targetTime*1000;
    
    const timer=useRef();
    const dialog=useRef();

    if(timeRemaining<=0){
        clearInterval(timer.current);
        dialog.current.open();
    }
    function handelReset(){
        setTimeRemaining(targetTime*1000);
    }
    function handelStart (){
        timer.current= setInterval(() => {
            setTimeRemaining(prev=>prev-10)

        }, 10);

        setTimerStated(true);
    }

    function handelStop(){
        dialog.current.open();
        clearInterval(timer.current);
    }
    return (
    <>
    <ResultModal 
    ref={dialog} 
    targetTime={targetTime} 
    remainingTime={timeRemaining} 
    onReset={handelReset}
    />
    <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
            {targetTime} second{targetTime>1 ?'s':''}
        </p>
        <p>
            <button onClick={timerIsActive?handelStop:handelStart}>
                {timerIsActive?"stop":"start"} challenge
            </button>
        </p>
        <p className={timerIsActive?'active':undefined}>
            {timerIsActive?'Time is running...':'Timer inactive'}
        </p>
    </section>
    </>
    )
}