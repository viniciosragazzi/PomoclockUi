import React, { useState, useEffect } from "react";

export default function Timer() {
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((oldState) => oldState - 1);
      if (seconds === 0 && minutes >= 1) {
        setSeconds(59);
        setMinutes((oldState) => oldState - 1);
      }
    }, 1000);

    if (!running) {
      setSeconds(0);
      setMinutes(20);
      clearInterval(interval);
    }
    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      setRunning(false);
      setSeconds(0);
      setMinutes(20);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, running]);

  return (
    <>
      <div className="boxCronometro">
        <div className="cronometro">
          <svg>
            <circle r="120"></circle>
            <circle r="120"></circle>
          </svg>
        </div>
        <div className="numTempo">
          <h2>
            {String(minutes).padStart(2, "0")}:
            {String(seconds).padStart(2, "0")}
          </h2>
        </div>
      </div>
      <button
        className="btn"
        onClick={() => setRunning((oldState) => !oldState)}
      >
        {running ? "Reiniciar" : "Iniciar"}
      </button>
    </>
  );
}
