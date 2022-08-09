import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  const [number, setNumber] = useState('')
  const [pin, setPin] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [revealPassword, setRevealPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }
  console.log(`number:${number}`)
  console.log(`pin:${pin}`)

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        {submitted ? (
          <div className='success-message'>
            Success! Thank you for registering
          </div>
        ) : null}
        <label>Library card Number</label>
        <input
          type='text'
          className='form-field'
          onChange={(e) => setNumber(e.target.value)}
        ></input>

        <br></br>

        <label>PIN number</label>
        <input
          type='text'
          className='pin-form'
          onChange={(e) => setPin(e.target.value)}
        ></input>
        <h4>Forgot PIN?</h4>
        <Link to='/reset'>Reset My Pin</Link>
        <br />
        <label>Dont have a library card?</label>
        
        <li>
          <Link to='/register'>Register for a new libary card</Link>
        </li>

        <br />
        <label>
          <input
            type='checkbox'
            checked={revealPassword}
            onChange={() => setRevealPassword(!revealPassword)}
          />
          Reveal password
        </label>

        <br></br>
        <label>
          <input
            type='checkbox'
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
          />
          Remember me
        </label>

        <br></br>

        <button type='button'>Login</button>
      </form>
    </div>
  )
}
//<a href='url'>Register for a new libary card</a>
