import React from 'react'
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