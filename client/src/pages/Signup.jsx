import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox.jsx'
import { Link } from 'react-router-dom'
import userSignup from '../hooks/userSignup.js';

const Signup = () => {
  const [inputs,setInputs] = useState({
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: "",
    gender:""

});

const {loading, signup} = userSignup()


const handleSubmit = async(e)=>{
  e.preventDefault();
  await signup(inputs);
}

const handleCheckboxChange = (gender) =>{
  setInputs({...inputs, gender});
}

  return (
    <div className='flex flex-col justify-center items-center min-w-96 mx-auto'>
      <div className='h-full w-full p-6 bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100'>
          <h1 className='text-3xl p-4 font-semibold text-center text-white '>Sign Up <span className='text-blue-300'>Let's Chat</span> 
          </h1>
          <form onSubmit={handleSubmit}>
          <div>
          <label className="label p-2">
            <span className='text-base label-text'>Full Name</span>
          </label>
          <input type='text' placeholder = "Enter Name" className='w-full input h-10 input-border'
            value={inputs.fullName}
            onChange={(e)=> setInputs({...inputs,fullName: e.target.value})}
          ></input>
          </div>
          <div>
          <label className="label p-2">
            <span className='text-base label-text'>Username</span>
          </label>
          <input type='text' placeholder = "Enter Username" className='w-full input h-10 input-border'
            value={inputs.userName}
            onChange={(e)=>setInputs({...inputs,userName: e.target.value})}
          ></input>
          </div>
          <div>
          <label className="label p-2">
            <span className='text-base label-text'>Password</span>
          </label>
          <input type='password' placeholder = "Enter Password" className='w-full input h-10 input-border'
            value={inputs.password}
            onChange={(e)=> setInputs({...inputs,password: e.target.value})}
          ></input>
          </div>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Re-Enter Password' className='input w-full h-10 input-border'
             value={inputs.confirmPassword}
             onChange={(e)=> setInputs({...inputs,confirmPassword: e.target.value})}
            ></input>
          </div>
          <GenderCheckBox onCheckboxChange = {handleCheckboxChange} selectedGender ={inputs.gender}/>
          <Link to={"/login"} className='text-sm mt-2 hover:underline hover:text-white inline-block'>Already have an account?</Link>
            
          <div>
            <button className='btn btn-block mt-2 border btn-sm '>Sign Up</button>
          </div>

          </form>
      </div>
      

    </div>
  )
}

export default Signup