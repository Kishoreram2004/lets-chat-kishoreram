import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { IoMdChatbubbles } from "react-icons/io";
import useConversation from '../zustand/useConversation';

const MessageContainer = () => {
  const {selectedConversation,setSelectedConversation} = useConversation();
  useEffect(()=>{
    return ()=> setSelectedConversation(null);
  },[])
  return (
    <div className='md:min-w-[450px] flex flex-col'>
      {!selectedConversation?
        (<NoChatSelected/>):
         (<>
            <div className='bg-slate-500 px-4 py-2 mb-2'>
                <span className="label-text text-white">To:</span>{" "}
                <span className="text-white">{selectedConversation.fullName}</span>
            </div>
            <Messages />
            <MessageInput />
         </>)
        }
    </div>
  )
}

const NoChatSelected = ()=>{
  
  return(
    <div className='flex items-center justify-center w-full h-full '>
      <div className='p-4  sm:text-lg md:text-xl text-white font-semibold flex justify-center flex-col items-center gap-2 '>
        <p>Welcome </p>
        <p>Select a chat to start message</p>
        <IoMdChatbubbles className='text-3xl md:text-6xl text-center'/>
      </div>
    </div>
  )
}

export default MessageContainer