import React from 'react'

const FormList = [
  'FirstName',
  'LastName',
  'Street Address',
  'Apartment Number',
  'City',
  'Phone Number',
  'Zipcode',
  'Email Address',
  'Pin',
  'Confirm Pin',
]

export default function Register() {
  return (
    <div>
      <h2>Register for a Library card</h2>
      <h3>
        This page allows you to begin your library card registration online. You
        will get a temporary card number and PIN. This temporary number is good
        for 60 days. With your new account, you may log in to our catalog and
        use our online resources. You will receive an email when holds are ready
        for pickup. To get a permanent card, please visit one of our locations.
        You will need to show a valid photo ID and proof of Wake County address.
        For more information about registration, please call the library you
        plan to visit. Children 16 and under require parent or guardian approval
        for a library card. For this group, a parent/guardian may present proof
        of their own residency and identity in lieu of the child. There are no
        age restrictions on borrowing any library materials. Parents and legal
        guardians are responsible for their child's selections of materials and
        use of the internet. Please Note: PINs must be a 4-digit number.
      </h3>
      <form>
        {FormList.map((item) => (
          <label>
            {item}
            <input type='text'></input>

            <br></br>
          </label>
        ))}
        <br></br>
        <button type='button'> Register</button>
      </form>
    </div>
  )
}
