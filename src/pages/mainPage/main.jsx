import React, { useState } from "react";
import "./main.css";
import { AiOutlineSetting } from "react-icons/ai";
import { BsDiagram3 } from "react-icons/bs";
export default function Main() {
  const [seg, setSeg] = useState(0);
  const [min, setMin] = useState(20);
  const [std, setStd] = useState(true);
  const [lb, setLb] = useState('Iniciar')
  function click() {
    sec();

    setStd(!std);
    setLb(std === false ? 'Iniciar':'Parar')
  }
  let s = seg;
  let m = min;
  function sec() {
   setInterval(ds, 1000);
    
    if (std === false) {
      window.location.reload()
    }
    function ds() {
      if (m > 0 && std === true) {
        s = s - 1;
        setSeg(s);
        if (s < 0 && std === true) {
          s = 59;
          setSeg(59);
          m = m - 1;
          setMin(m);
        }
      } else {
        if (std === false) {
          s = 0;
          m = 20;
          setSeg(s);
          setMin(m);
        }
      }
    }
   
  }

  return (
    <div className="mainPage">
      <div className="headerMain">
        <AiOutlineSetting />
        <BsDiagram3 />
      </div>
      <div className="mainContent">
        <h1>Mantenha o foco</h1>
        <div className="boxCronometro">
          <div className="cronometro">
            <svg>
              <circle r="120"></circle>
              <circle r="120"></circle>
            </svg>
          </div>
          <div className="numTempo">
            <h2>
              {min < 10 ? "0" + min : min}:{seg < 10 ? "0" + seg : seg}
            </h2>
          </div>
        </div>
        <button className="btn" onClick={click}>
          {lb}
        </button>
      </div>
    </div>
  );
}
