import React from 'react'

function Reset() {
  return (
    <div>
      <h1>Reset My PIN</h1>
      <h4>
        Please enter your complete card number. A email will be sent to the
        email address on file for your account containing a link to reset your
        PIN
      </h4>
      <label>Card Number</label>
      <input type='text'></input>
      <br></br>
      <button type='button'>Reset My Pin</button>
    </div>
  )
}
export default Reset
