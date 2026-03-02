import React from 'react'

const Contact = () => {
  return (
    <div className='ml-7 flex flex-col  w-1/4'>
      <h1> Contact Us  </h1>

      <p> Get in touch with us We are always hero to help you. </p>

      <label> Full Name </label>
      <input type='text' name='fullName' placeholder='Enter Your Full Name' />

      <label> Email Address </label>
      <input type='email' name='email' placeholder='Enter Your Email Address ' />

      <label> Message </label>
      <textarea type='text' name='textarea' placeholder='We are always here to help you' > </textarea>
      
      <button className='bg-'> Send Message </button>
    </div>
  )
}

export default Contact
