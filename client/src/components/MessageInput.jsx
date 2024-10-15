import React from 'react'
import { IoIosSend } from "react-icons/io";
const MessageInput = () => {
  return (
    <form className='my-3 px-4'>
        <div className='w-full relative '>
            <input type='text' placeholder='Send a message' className="w-full rounded-full  text-sm block p-2.5 pl-5 text-white"/>
            <button type="submit" className="absolute  inset-y-0 end-0 flex items-center pr-3"><IoIosSend  className='w-5 h-5'/></button>
        </div>
    </form>
  )
}

export default MessageInput