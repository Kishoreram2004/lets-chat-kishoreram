import React from 'react'
import useConversation from '../zustand/useConversation.js'

const Conversation = ({conversation,lastIdx}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  
  return (
    <>
       <div className={`flex gap-4 items-center text-white hover:bg-sky-500 rounded p-2 py-1 cursor-pointer ${isSelected?"bg-sky-500": ""}` } onClick={()=>{setSelectedConversation(conversation)}}>
            <div className='avatar online'>
                <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt="use avatar"></img>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold'>{conversation.fullName}</p>

                </div>
            </div>
       </div>
       {!lastIdx && <div className='divider my-0 py-0 h-1' />}
    </>
  )
}

export default Conversation


/*import React from 'react'

const Conversation = () => {
  return (
    <>
       <div className='flex gap-4 items-center text-white hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
            <div className='avatar online'>
                <div className="w-12 rounded-full">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/002/387/693/small_2x/user-profile-icon-free-vector.jpg" alt="use avatar"></img>
                </div>
            </div>

            <div className='flex flex-col flex-1'>
                <div className='flex gap-3 justify-between'>
                    <p className='font-bold'>kishore</p>
                    <span className="text-xl">^_^</span>
                </div>
            </div>
       </div>
       <div className='divider my-0 py-0 h-1' />
    </>
  )
}

export default Conversation */