import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    //this overflow-auto is used to have a scroll bar in this message container
    <div className='px-4 flex-1 overflow-auto'> 
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages