import React from 'react'
import { Link } from 'react-router-dom'
import {BsClockHistory} from 'react-icons/bs'
import "./welcome.css"
export default function welcome() {
    return (
        <div className="welcomePage">
            <BsClockHistory/>
            <h1>Pomoclock</h1>
            <p>Seu aplicativo pomodoro!</p>
            <Link to="/main"><button className= "btn">Vamos!</button></Link>
            
        </div>
    )
}
