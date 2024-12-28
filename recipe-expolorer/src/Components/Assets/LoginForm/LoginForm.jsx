import React from 'react';
import './LoginForm.css';


const LoginForm = () => {
    return (
        <div>
        <div className='wrapper'>
        <form action="">
        <span style={{color:"orange", fontSize:"35px", marginLeft:"140px"}}><i class="fa-solid fa-burger"></i></span>
            <h1>Food Recipe</h1> 
            <h4>Sign in</h4>
            <div className="input-box">
                <label>Email</label> 
                <input className="email" type="text" placeholder='example@mail.com' required/>
                </div>
            <div className="input-box">
                <label>Password</label>
                <input className="email1" type="password" placeholder='' required/>
                </div>
                <div className="remember-forgot">
                    <label style={{marginTop:"15px"}}><input type="checkbox"/>Remember me</label>
                    <a style={{marginTop:"15px"}} href="#">Forgot password?</a>
                </div>
                <button className="button" type="submit">Sign in</button>
                <div className="register-link">
                    <p>Didn't have an account? <a href="#">sign up</a></p>

                </div>
        </form>
        </div>
        </div>
    );
};
export default LoginForm;