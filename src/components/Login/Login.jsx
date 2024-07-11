import React, { useState } from "react";
import './Login.css'

import bg from '../Assets/bg.jpg'

const Login = () => {

    return (
        <div className='container'>
            <div className="header">
                <div className="text">Login</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <input type="username" placeholder="Enter username" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Enter password"/>
                </div>
            </div>
            <div className="submit-container">
                <div className="submit">Log in</div>
            </div>

        </div>
    )
}

export default Login 