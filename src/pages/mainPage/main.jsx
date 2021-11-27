/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import { MainPage } from "./mainStyle.jsx";
import { AiFillSetting, AiFillProject } from "react-icons/ai";
import { connect } from 'react-redux'
import Timer from "../../components/Timer";
import { IconContext } from "react-icons";

// import { Container } from './styles';
function mainPage({contador}) {
  const [estado, setEstado] = useState(false);
  const [titulo, setTitulo] = useState('Mantenhe-se focado!');

  
  useEffect(() => {
    
      setEstado(!estado)
      if(estado === true){
        setTitulo('dad')
      }
      if(estado === false){
        setTitulo('Mantenhe-se focado!')
      }
    return 
  }, [contador]);


  return (
    
    <IconContext.Provider value={{color:'#fff'}}>
    <MainPage contador={contador} >
      <div className="headerMain">
        <AiFillSetting />
        <AiFillProject />
      </div>
      <div className="mainContent">
        <h1>{titulo}</h1>
        <Timer/>
      </div>
    </MainPage>
    </IconContext.Provider>
  );
}

export default connect(state => ({
    contador: state.contador
}))(mainPage);