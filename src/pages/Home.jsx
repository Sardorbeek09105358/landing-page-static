import React from 'react'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'

const Home = () => {
  return (
    <div>
      <Sidebar/>
      <div className='ml-[80px]'>
        <Main/>
      </div>
    </div>
  )
}

export default Home