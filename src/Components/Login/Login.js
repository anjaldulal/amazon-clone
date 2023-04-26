import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';


function Login() {

    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history('/');
            })
            .catch((error) => console.log("Login Error Message >>>", error.message));
    }

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history('/');
                }
            })
            .catch((error) => console.log("Register Error Message >>>", error.message));
    }

    return (
        <div className="login">

            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="amazon-logo" className='amazon-login-logo' />
            </Link>

            <div className="login-form-container">
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="email" value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button className='login-signin-button' type='submit' onClick={signIn}>Sign In</button>
                </form>
                <p>By signing-in you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button className='login-signup-button' onClick={signUp}>Create your Amazon Account</button>
            </div>

        </div>
    );
}

export default Login;