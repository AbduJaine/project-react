import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LoginFunc from './pages/LoginPage'
import RegisterFunc from './pages/RegisterPage'
import WelcomeFunc from './pages/Welcome'

export interface appProps{

}

const AppFunc: React.FunctionComponent<appProps> = props => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginFunc />} />
                <Route path='/register' element={<RegisterFunc />} />
                <Route path='/welcome' element={<WelcomeFunc />} />
            </Routes>
        </BrowserRouter>

    )
}

export default AppFunc