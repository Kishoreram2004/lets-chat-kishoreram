import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-white'>Login
          <span className='text-blue-200'> Let's Chat</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input  '></input>
            <label className="label p-2">
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input'></input>
          </div>
          <Link to='/signup' className='text-sm hover:underline hover:text-white mt-2 inline-block' > {"Don't"} have an account? </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2  '>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login