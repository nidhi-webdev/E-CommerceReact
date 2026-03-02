import { Form } from 'react-router-dom'

const Contact = () => {
  return (
    <Form method='POST' action='/contact'>
      <div className='ml-7 flex flex-col  w-1/3 text-gray-600 font-serif'>
        <h1 className='text-2xl font-extrabold mt-10 '> Contact Us  </h1>

        <p className='mb-8'> Get in touch with us We are always hero to help you. </p>

        <label className='mb-1 text-sm font-semibold'> Full Name </label>
        <input type='text' name='fullName' placeholder='Enter Your Full Name' required
          className='border border-gray-300 mb-5 outline-none p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all' />

        <label className='mb-1 text-sm font-semibold'> Email Address </label>
        <input type='email' name='email' placeholder='Enter Your Email Address ' required
          className='border border-gray-300 mb-5 outline-none p-2 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all' />

        <label className='mb-1 text-sm font-semibold'> Message </label>
        <textarea name='textarea' placeholder='We are always here to help you' required
          className='border border-gray-300 mb-5 outline-none p-4 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all' > </textarea>

        <button className='bg-gray-800 text-white px-4 py-3 rounded cursor-pointer hover:bg-red-900 transition-all hover:scale-105 active:scale-95 font-bold uppercase tracking-wider '> Send Message </button>


      </div>
    </Form>
  )
}

export default Contact
