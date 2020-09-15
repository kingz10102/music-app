import React from 'react';
import '../css/Login.css';
import {accessUrl} from '../spotify';

function Login() {
    return (
        <div className="login">
           <h2>Remarkable Robato</h2>
            <a href={accessUrl}>LOGIN WITH ROBATO </a>
        </div>
    )
}

export default Login
