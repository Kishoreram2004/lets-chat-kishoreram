import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import useSendMessage from '../hooks/useSendMessage';

const MessageInput = () => {
  const [message, setMessage] = useState("")
  const {loading, sendMessage} = useSendMessage();

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("")
    


  }
  return (
    <form className='my-3 px-4' onSubmit={handleSubmit}>
        <div className='w-full relative '>
          
            <input 
              type='text' 
              placeholder='Send a message' 
              className="w-full rounded-full  text-sm block p-2.5 pl-5 text-white"
              value={message}
              onChange={(e)=> setMessage(e.target.value)}
              />
            <button type="submit" className="absolute  inset-y-0 end-0 flex items-center pr-3" >{loading?<div className='loading loading-spinner'></div>:<IoIosSend  className='w-5 h-5'/>}</button>
        </div>
    </form>
  )
}

export default MessageInput