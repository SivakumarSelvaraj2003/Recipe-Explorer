import React from "react";
import './LoginForm.css';

const LoginForm = () => {
  return(
    <div className="login">
      <form action="">
        <h1>Food recipe</h1>
        <h4>Sign in</h4>
        <div className="input-box">
          <label htmlFor="">Email</label>
          <input type="email" placeholder="example@gmail.com" required />
          <IoMdMail  className="icon" />
        </div>
        <div className="input-box">
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" required/>
          <RiLockPasswordFill className="icon" />

        </div>
        <div className="remember-forgot">
          <label htmlFor=""><input type="checkbox" /> Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type="submit" className='btn'>Login</button>
        <div className="register-link">
          <p>Don't have an account? <a href="#">Sign in</a> </p>
        </div>
      </form>

    </div>
  )
}

export default LoginForm;