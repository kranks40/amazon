import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))

    } 

    const register = e => {
        // e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
        .then(auth => {
             if (auth) {
                 setPassword('');
                 setEmail('');
                 history.push('login')
            }

        })
        .catch(error => alert(error.message))
    };
    


    return (
        <div className='login'>
            <Link to='/'>
            <img className='login__image'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' alt=''
            />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>
                    <Button type='submit' onClick={signIn}>Sign In</Button>
                </form>

                <p>By signing in you agree to the Our Conditions of the use & sale.
                    Please see our Privacy Notice, our Cookies Notice and our Interest
                    based Ads Notice.
                </p>

                <div className='login__registerButton'>
                    <Button type='submit' onClick={register}>Create your Amazon Account</Button>
                </div>
               
            </div>
        </div>
    )
}

export default Login;
