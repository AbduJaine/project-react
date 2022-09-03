import React from 'react'
import './Register.css';

export interface registerProps{

}

const RegisterFunc: React.FunctionComponent<registerProps> = props => {
    return (

        <div className="container">

      <div className='title'>Register</div>
      
      <form action='/welcome'>

        <div className="user-details">

            <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder='Enter username' required />
            </div>
            
            <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder='Enter password' required />
            </div>

        </div>

        <div className="button">
            <input type="submit" value="Register" />
        </div>

        <form action='/'>
        <div className='signup-details'>
            <span className="signup-title">Already have an account ?</span>
            <div className='category'>
                <label>
                <input className="signup" type='submit' value="Click here to login."/>
                </label>
            </div>
        </div>
        </form>

        

      </form>
        
    </div>

    )
}

export default RegisterFunc