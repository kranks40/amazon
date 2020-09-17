import { Link } from 'react-router-dom';
import React from 'react';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__image'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''
            />
            </Link>
        </div>
    )
}

export default Login;
