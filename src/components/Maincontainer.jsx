import React from 'react'
import Buttonlist from './Buttonlist'
import Videocontainer from './Videocontainer'
import Videocard from './Videocard'

const Maincontainer = () => {
  return (
    <div className='col-span-11 mt-[110px] ml-[220px]'>
        <Buttonlist/>
        <Videocontainer/>
        <Videocard/>
    </div>
  )
}

export default Maincontainer