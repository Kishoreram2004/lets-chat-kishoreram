import React from 'react'

const MessageSkeleton = () => {
  return (
    <div className='p-6 '>
    <div className='flex gap-3 items-center p-2'>
        <div className='skeleton w-10 h-10 rounded-full shrink-0'></div>
        <div className='flex flex-col gap-1'>
        <div className='skeleton h-4 w-40'></div>
        <div className='skeleton h-4 w-40'></div>
        </div>
        
    </div>
    <div className='flex flex-col  gap-1 p-3 absolute right-0'>
        
        <div className='skeleton h-4 w-40  '></div>
        <div className='skeleton h-4 w-40'></div>
        </div>
    </div>
  )
}

export default MessageSkeleton