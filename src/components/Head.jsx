import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu())
  }
  return (
<div className="grid grid-cols-12 items-center p-5 m-2 shadow-xl">
  {/* Left section: Hamburger + Logo */}
  <div className="flex items-center gap-4 col-span-2">
    <img
    onClick={toggleMenuHandler}
      className="h-8 cursor-pointer"
      src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
      alt="hamburger logo"
    />
    <img
      className="h-12"
      src="https://www.freepnglogos.com/uploads/youtube-video-logo-png-4.png"
      alt="youtube logo"
    />
  </div>

  {/* Middle section: Search bar */}
  <div className="col-span-8 flex items-center">
    <input
      type="text"
      placeholder="Search"
      className="border border-gray-400 px-4 py-2 w-full rounded-l-full"
    />
    <button className="bg-gray-200 px-4 py-2 rounded-r-full border border-l-0 border-gray-400">
      Search
    </button>
  </div>

  {/* Right section: User icon */}
  <div className="flex justify-end col-span-2">
    <img
      className="h-10"
      src="https://th.bing.com/th/id/R.c3631c652abe1185b1874da24af0b7c7?rik=XBP%2fc%2fsPy7r3HQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fpng-user-icon-circled-user-icon-2240.png&ehk=z4ciEVsNoCZtWiFvQQ0k4C3KTQ6wt%2biSysxPKZHGrCc%3d&risl=&pid=ImgRaw&r=0"
      alt="User Icon"
    />
  </div>
</div>

  )
}

export default Head