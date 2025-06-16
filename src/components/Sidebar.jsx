import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null; //Early Return pattern
  return (
    <div className='p-5 shadow-lg w-48'>
      <ul>
        <Link to = "/"> 
        <li>Home</li>
        </Link>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Watch history</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Watch history</li>
      </ul>
        <h1 className='font-bold pt-5'>Watch Later </h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
        <li>Watch history</li>
      </ul>
    </div>
  )
}

export default Sidebar