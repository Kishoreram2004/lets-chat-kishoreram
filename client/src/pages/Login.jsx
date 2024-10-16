import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../hooks/useLogin';
import { toast, Toaster } from 'react-hot-toast';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password,setPassword]= useState("");

  const {loading,login} = useLogin();

  const handleSubmit = async (e)=>{
     e.preventDefault();
     await login(username,password);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-white'>Login
          <span className='text-blue-200'> Let's Chat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
                <span className='text-base label-text'>Username</span>
            </label>
            <input type="text" placeholder='Enter username' className='w-full input  '
              value={username} onChange={(e)=> setUsername(e.target.value)}
            ></input>
            <label className="label p-2">
              <span className='text-base label-text'>Password</span>
            </label>
            <input type="password" placeholder='Enter password' className='w-full input'
              value={password} onChange={(e)=> setPassword(e.target.value)}
            ></input>
          </div>
          <Link to='/signup' className='text-sm hover:underline hover:text-white mt-2 inline-block' > {"Don't"} have an account? </Link>
          <div>
            <button className='btn btn-block btn-sm mt-2  ' 
            disabled={loading}
            >{loading?<span className='loading loading-spinner'></span>:"Login"}</button>
          </div>
        </form>
        <Toaster />
      </div>
    </div>
  )
}

export default Login