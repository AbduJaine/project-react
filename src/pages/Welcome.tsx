import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import RegisterFunc from './RegisterPage'
import './Welcome.css';


export interface welProps{

}

const WelcomeFunc: React.FunctionComponent<welProps> = props => {
    return (
    
        <form action='/'>
        <div className="containerWelcome">
            <div className='titleWelcome'>Welcome !</div>
            <div className="buttonWelcome"><input type='submit' value="Logout"/></div>
        </div>
        </form>
    )
}

export default WelcomeFunc