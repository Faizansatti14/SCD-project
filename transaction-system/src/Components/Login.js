import React from 'react';
import '../Styling/Login.css';
import usernamelogo from '../Images/username-logo.jpg';
import passwordlogo from '../Images/password-logo.png';

export default function Login() {
  return (
    <>
      <div className="bg">
        <div className="login-container">
          <h2>Login</h2>
          <form>
            <label htmlFor="uname"><b>Username</b></label>
            <div className='input-container'>
              <img src={usernamelogo} alt="logo" />
              <input type="text" placeholder="Enter Username" name="uname" required />
            </div>
            <label htmlFor="psw"><b>Password</b></label>
            <div className='input-container'>
              <img src={passwordlogo} alt="logo" />
              <input type="password" placeholder="Enter Password" name="psw" required />
            </div>
            
            <button type="submit">Login</button>
            <button type="submit">Create Account</button>
          </form>
        </div>
      </div>
    </>
  );
}
