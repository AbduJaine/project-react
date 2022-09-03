import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import RegisterFunc from './RegisterPage'
import './Login.css';


export interface loginProps{

}

const LoginFunc: React.FunctionComponent<loginProps> = props => {
    return (

        <div className="container">

      <div className='title'>Login</div>
      
      <form action='/welcome'>

        <div className="user-details">

            <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder='Enter your username' required id='aaa'/>
            </div>
            
            <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder='Enter your password' required />
            </div>

        </div>

        <div className="button">
            <input type='submit' value="Login"/>
        </div>

    <form action='/register'>
        <div className='signup-details'>
            <span className="signup-title">New here ?</span>
            <div className='category'>
                <label>
                    <input className="signup" type='submit' value="Click here to register."/>
                </label>
            </div>
        </div>
    </form>
        

      </form>
    </div>

    )
}

export default LoginFunc