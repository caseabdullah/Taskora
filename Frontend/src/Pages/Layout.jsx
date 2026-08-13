import React, { useState } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Top from '../components/layout/Top'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  const [username, setusername] = useState();
  const [task, settask] = useState([])
  const [stats, setstats] = useState({})


  return (
    <div>
        <div>
            <Sidebar />
        </div>
        <div className='ml-64'>
            <Top username={username}/>
        </div>
        <div className='ml-64'>
          <Outlet
          context={{
            setusername,
            task,
            settask,
            stats,
            setstats
          }}
/>
        </div>
    </div>
  )
}

export default Layout