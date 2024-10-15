import React from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'

const Signup = () => {
  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
          <h1 className='text-3xl p-4 font-semibold text-center text-white '>Sign Up <span className='text-blue-300'>Let's Chat</span> 
          </h1>
          <form>
          <div>
          <label className="label p-2">
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input type='text' placeholder = "Enter Name" className='w-full input h-10 input-border'></input>
          </div>
          <div>
          <label className="label p-2">
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder = "Enter Username" className='w-full input h-10 input-border'></input>
          </div>
          <div>
          <label className="label p-2">
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='password' placeholder = "Enter Password" className='w-full input h-10 input-border'></input>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Re-Enter Password' className='input w-full h-10 input-border'></input>
          </div>
          <GenderCheckBox />
          <a className='text-sm mt-2 hover:underline hover:text-white inline-block'>Already have an account?</a>

          <div>
            <button className='btn btn-block mt-2 border btn-sm '>Sign Up</button>
          </div>

          </form>
      </div>
      

    </div>
  )
}

export default Signup