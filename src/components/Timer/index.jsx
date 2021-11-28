import React, { useState, useEffect } from "react";
import { Circulo } from "../../pages/mainPage/mainStyle";
import { connect } from "react-redux";
import relogio from './relogio.mp3'
// import { Container } from './styles';
function changeState(contador) {
  return {
    type: "INCREMENT",
    contador,

  };
}

function Timer({ contador, ativar }) {
  const [minutes, setMinutes] = useState(20);
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const [barra, setBarra] = useState(60 * minutes);
  const [conversao, setConversao] = useState(60*20);
  const relogioAudio = new Audio(relogio)
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((oldState) => oldState - 1);
      setBarra((oldState) => oldState - 1);
      if (seconds === 0 && minutes >= 1) {
        setSeconds(59);
        setMinutes((oldState) => oldState - 1);
      }
      if(running === true ){
        if(minutes < 21){
          relogioAudio.play()
          relogioAudio.volume = 0.3;
        }
      }
    }, 1000);

    if (!running) {
      if ((contador%2)!==0) {
        setMinutes(5);
        setConversao(60 * 5);
        setSeconds(0);
        setBarra(60 * minutes);
      
      }
      if ((contador%2)===0) {
        setMinutes(20);
        setConversao(60 * 20);
        setSeconds(0);
        setBarra(60 * minutes);
 
      }
      clearInterval(interval);
    }
    if (minutes === 0 && seconds === 0) {
      clearInterval(interval);
      ativar(contador);

      setRunning(false);
    }

    return () => clearInterval(interval);
  }, [minutes, seconds, running, barra]);

  return (
    <>
      <div className="boxCronometro">
        <div className="cronometro">
          <svg>
            <circle r="120"></circle>
            <Circulo
              mnt={(754 * ((barra * 100) / conversao)) / 100}
              r="120"
            ></Circulo>
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

const stateToProps = (state) => ({
  contador: state.contador,

});
const dispatchActive = (dispatch) => ({
  ativar: (contador) => dispatch(changeState(contador)),
});
export default connect(stateToProps, dispatchActive)(Timer);
