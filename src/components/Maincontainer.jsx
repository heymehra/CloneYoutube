import React from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'
import Videocard from './Videocard'
import Demo from './Demo'

const Maincontainer = () => {
  return (
    <div className='col-span-11 mt-[110px] ml-[220px]'>
        <Buttonlist/>
        <Videocontainer/>
        <Videocard/>
        <Demo/>
    </div>
  )
}

export default Maincontainer