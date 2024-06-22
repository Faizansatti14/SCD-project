import React from 'react'
import '../Styling/Signup.css';

export default function Signup() {
  return (
        <>
            <div className="bg">
                <div className="login-container">
                    <h2>Signup</h2>
                    <form>
                        <label htmlFor="uname"><b>Username</b></label>
                        <div className='input-container'>
                          <input type="text" placeholder="Enter Username" name="uname" required />
                        </div>
                        <label htmlFor="phone"><b>Phone no</b></label>
                        <div className='input-container'>
                          <input type="text" placeholder="Enter Phone number" name="uname" required />
                        </div>
                        <label htmlFor="email"><b>Email</b></label>
                        <div className='input-container'>
                        <input type="email" id="email" name="email" placeholder="Enter your email" required  />
                        </div>
                        <label htmlFor="psw"><b>Password</b></label>
                        <div className='input-container'>
                          <input type="password" placeholder="Enter Password" name="psw" required />
                        </div>
                        
                        <button type="submit">Register</button>
                        
                    </form>
                </div>
            </div>
        </>
    );
}
