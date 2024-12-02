import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../zustand/useConversation';
import useGetConversation from '../hooks/useGetConversation';
import {Toaster} from 'react-hot-toast';
import toast from "react-hot-toast"

const SearchInput = () => {
  const [search,setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversation();
  const handleSubmit = (e)=>{
    e.preventDefault()
    if (!search) return;

    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))

    if (conversation){
      setSelectedConversation(conversation);
      setSearch("")
    }else{
      toast.error("No such user found!")
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center gap-2'>
        <input 
          type="text" 
          placeholder="Search.." 
          className='input rounded-full input-bordered'
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        ></input>
        <button type="submit" className='btn btn-circle border-none hover:bg-sky-400 text-white
        ' ><FaSearch /></button>
        
     </form>
     <Toaster />
    </div>
    
  )
}

export default SearchInput

/*import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
        <input type="text" placeholder="Search.." className='input rounded-full input-bordered'></input>
        <button type="submit" className='btn btn-circle border-none hover:bg-sky-400 text-white
        ' ><FaSearch /></button>
    </form>
  )
}

export default SearchInput */