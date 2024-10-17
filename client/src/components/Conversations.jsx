import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversation from '../hooks/useGetConversation.js'
import { Toaster } from 'react-hot-toast';

const Conversations = () => {
  const {loading, conversations} = useGetConversation();
  
  return (
    <div className='flex flex-col py-2 overflow-auto'>
        {conversations.map((conversation,idx)=>(
          <Conversation 
            key={conversation._id}
            conversation = {conversation}
            lastIdx = {idx === conversation.length-1}
          />
        ))}
        {loading?<span className='loading loading-spinner mx-auto'></span>:null}
        <Toaster />
    </div>
  )
}

export default Conversations

/*import React from 'react'
import Conversation from './Conversation.jsx'

const Conversations = () => {
  return (
    <div className='flex flex-col py-2 overflow-auto'>
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
    </div>
  )
}

export default Conversations  */