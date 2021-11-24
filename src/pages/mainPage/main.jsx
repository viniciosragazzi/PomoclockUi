import React from "react";
import "./main.css";
import { AiOutlineSetting } from "react-icons/ai";
import { BsDiagram3 } from "react-icons/bs";
import Timer from "../../components/timer/Timer";
export default function Main() {
 
  return (
    <div className="mainPage">
      <div className="headerMain">
        <AiOutlineSetting />
        <BsDiagram3 />
      </div>
      <div className="mainContent">
        <h1>Mantenha o foco</h1>
        <Timer/>
      </div>
    </div>
  );
}
