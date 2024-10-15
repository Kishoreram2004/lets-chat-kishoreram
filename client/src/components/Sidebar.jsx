import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import Logout from './Logout.jsx'

const Sidebar = () => {
  return (
    <div className='border-r p-4 flex flex-col'>
      <SearchInput />
      <div className='divider'></div>
      <Conversations/>
      <Logout />
    </div>
  )
}

export default Sidebar

/*
import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import Logout from './Logout.jsx'

const Sidebar = () => {
  return (
    <div className='border-r p-4 flex flex-col'>
      <SearchInput />
      <div className='divider'></div>
      <Conversations/>
      <Logout />
    </div>
  )
}

export default Sidebar */