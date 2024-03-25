import { useState,useRef } from "react";

export default function Player() {
  const playerName=useRef();
  const [entredPlayerName,setEntredPlayerName]=useState();
  function handelClick(){
    setEntredPlayerName(playerName.current.value);
    playerName.current.value='';
  }
  return (
    <section id="player">
      <h2>Welcome {entredPlayerName??'unknown entity'} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
