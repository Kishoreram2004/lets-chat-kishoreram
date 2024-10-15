import React from 'react'
import Sidebar from '../components/Sidebar.jsx'
import MessageContainer from '../components/MessageContainer.jsx'


const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px]  p-6 bg-blue-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 '>
        <Sidebar />
        <MessageContainer />
    </div>
  )
}

export default Home