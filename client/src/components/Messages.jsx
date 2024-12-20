import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../hooks/useGetMessages'
import MessageSkeleton from './MessageSkeleton';
import useListenMessage from '../hooks/useListenMessage';

const Messages = () => {
  const {messages, loading} = useGetMessages();
  const lastMessageRef = useRef();
  useListenMessage()
  useEffect(()=>{
    setTimeout(()=>{
        lastMessageRef.current?.scrollIntoView({behavior:"smooth"})
    },100)
  },[messages])
  return (
    //this overflow-auto is used to have a scroll bar in this message container
    <div className='px-4 flex-1 overflow-auto'> 
    
        {!loading && messages.length > 0 && messages.map((message)=>
            <div key={message._id} ref={lastMessageRef}>
            <Message  message ={message}/>
            </div>
        )}
 
        {loading && [...Array(3)].map((_,idx)=><MessageSkeleton key={idx}/>)}

        {!loading && messages.length === 0 && (
          <p className='text-center'> Send message to start the conversation</p>
        )}
    </div>
  )
}

export default Messages