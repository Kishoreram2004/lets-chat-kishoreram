import React from 'react'
import { IoIosLogOut } from "react-icons/io";
import useLogout from '../hooks/useLogout';


const Logout = () => {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-7'>
        {!loading ?(
          <IoIosLogOut className='w-6 h-6 cursor-pointer text-white' onClick={logout}/>
        ):(
          <span className='loading loading-spinner'></span>
        )}
    </div>
  )
}

export default Logout