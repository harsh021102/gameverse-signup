import React from 'react'
import './Signup.css'
import { FaFacebook} from "react-icons/fa";

function Signup() {
  return (
      <section className="bckground">
        <div className="container">
          <div className="signin__card">
            <div className="signin__header">
              <div className="logo">GameVerse</div>
            </div>
            <div className="signin__inputs">
              <input type="text" placeholder='First Name' className='firstname'/>
              <input type="text" placeholder='Last Name' className='lastname'/>
              <input type="text" placeholder='Username' className='username'/>
              <input type="email" placeholder='Email' className='email'/>
              <input type="password" placeholder='Password' className='password'/>
              <input type="password" placeholder='Confirm Password' className='password'/>
              {/* <label>
                <input type="checkbox"/>Remember Me
              </label> */}
            </div>
            <div className="login__button">
              <button className='log__in'>Sign Up</button>
              <button className='log__in facebook'><FaFacebook/></button>
            </div>
          <div className="signin__header">
            <div className="signin__text">Already have an account?<a href="#">Log In</a></div>
          </div>
          </div>
        </div>
      </section>
  )
}
export default Signup;