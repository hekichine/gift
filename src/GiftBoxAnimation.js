import React, { useReducer } from "react";
import "./styles.css";

import box from "./images/box.png";
import boxLid from "./images/box-lid.png";
import kuku from "./images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
import Confetti from "./confetti/Confetti";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};
export default function GiftBoxAnimation() {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  return (
    <div className="App">
      <Confetti open={jump === "jump"} />
      <div className="img-container">
        <p className={`kuku ${jump} kaka`}>Chúc mừng ngày quốc tế nam giới</p>
        <button className="box" onClick={() => animate()}>
          <img className="box_2" src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated} box_2`}
          src={boxLid}
          alt="box-lid"
        />
      </div>
    </div>
  );
}
