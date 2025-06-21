import React from 'react'
import Sidebar from './Sidebar'
import Maincontainer from './Maincontainer'
import { Outlet } from 'react-router-dom'
import Head from './Head'


const Body = () => {
  return (
    <div className='grid grid-flow-col'>
      <Head/>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body