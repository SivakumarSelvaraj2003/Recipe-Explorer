import React from 'react';
import './RegisterForm.css';


const LoginForm = () => {
    return (
        <div>
        <div className='register'>
        <form action="">
        <span style={{color:"orange", fontSize:"35px", marginLeft:"130px"}}><i class="fa-solid fa-burger"></i></span>
            <h1>Food Recipe</h1> 
            <h4>Sign up</h4>
            <div className="input-box">
                <label>Email</label> 
                <input className="email" type="text" placeholder='example@mail.com' required/>
                </div>
            <div className="input-box">
                <label>Password</label>
                <input className="email1" type="password" placeholder='' required/>
                </div>
                <div className='input-box'>
                <label htmlFor="">Conform Password</label>
                <input type="password" required />
                </div>
                <button className="button" type="submit">Sign in</button>
                <div className="register-link">
                    <p>Already have an account? <a href="#">sign up</a></p>

                </div>
        </form>
        </div>
        </div>
    );
};
export default RegisterForm;