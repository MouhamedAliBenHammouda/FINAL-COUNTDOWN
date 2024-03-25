import { forwardRef,useImperativeHandle,useRef } from "react";
const ResultModal= forwardRef(function ResultModal({targetTime,remainingTime,onReset},ref){
    const dialog=useRef();
    const userLost = remainingTime<=0;
    const formatingRemainingTime =(remainingTime/100).toFixed(2);
    const score =Math.round((1-remainingTime/(targetTime*1000))*100);
    useImperativeHandle(ref,()=>{
        return{
            open(){
                dialog.current.showModal();
            }
        }
    })
    return (<dialog className="result-modal" ref={dialog}>
            {userLost && <h2>You lost </h2>}
            {!userLost && <h2>You Score : {score} </h2>}
            <p>
                the target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                you stopped the timer withe <strong>{formatingRemainingTime} seconds left.</strong>
            </p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>

    </dialog>);
})
export default ResultModal;
