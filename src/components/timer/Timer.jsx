import React, { useState } from "react";
export default function Timer() {
  const [seg, setSeg] = useState(0);
  const [min, setMin] = useState(20);
  const [std, setStd] = useState(true);
  const [lb, setLb] = useState("Iniciar");
  function click() {
    sec();

    setStd(!std);
    setLb(std === false ? "Iniciar" : "Reiniciar");
  }
  let s = seg;
  let m = min;
  function sec() {
    setInterval(ds, 1000);
    if (std === false) {
      window.location.reload();
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
  );
}
