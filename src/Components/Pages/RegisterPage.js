import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <div>
      Register Page - Work in progress
      <div className="">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
           
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default RegisterPage

