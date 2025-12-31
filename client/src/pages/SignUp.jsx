import React from 'react'

const SignUp = () => {
  return (
    <div className='p-3 max-w-lg mx-auto'> 
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg' id="username" />
        <input type="email" placeholder='Email' className='border p-3 rounded-lg' id="email" />
        <input type="password" placeholder='Password' className='border p-3 rounded-lg' id="password" />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-85 transition duration-300 disabled:opacity-50'>
          Create Account
        </button>
      </form>

      <div className=''>
        <p>Have an account?</p>
        <span className='text-blue-700'>Sign in</span>
      </div>
    </div>
  )
}

export default SignUp;