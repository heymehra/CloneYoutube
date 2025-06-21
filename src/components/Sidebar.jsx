import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.app.isMenuOpen);
  if(!isMenuOpen) return null; //Early Return pattern
  return (
      <div className='w-56 h-screen fixed top-[88px] left-0 bg-white shadow-lg overflow-y-auto px-4 py-6'>
      {/* Navigation Section */}
      <ul className='space-y-3'>
        <li>
          <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
        </li>
        <li>
          <Link to="/demo" className="hover:text-blue-500 transition-colors">Demo</Link>
        </li>
        <li className="hover:text-blue-500 cursor-pointer">Gaming</li>
        <li className="hover:text-blue-500 cursor-pointer">Movies</li>
        <li className="hover:text-blue-500 cursor-pointer">Watch history</li>
      </ul>

      {/* Subscription Section */}
      <h2 className='font-semibold text-gray-700 mt-6 mb-2 border-b pb-1'>Subscription</h2>
      <ul className='space-y-2'>
        <li className="hover:text-blue-500 cursor-pointer">Music</li>
        <li className="hover:text-blue-500 cursor-pointer">Sports</li>
        <li className="hover:text-blue-500 cursor-pointer">Gaming</li>
        <li className="hover:text-blue-500 cursor-pointer">Movies</li>
        <li className="hover:text-blue-500 cursor-pointer">Watch history</li>
      </ul>

      {/* Watch Later Section */}
      <h2 className='font-semibold text-gray-700 mt-6 mb-2 border-b pb-1'>Watch Later</h2>
      <ul className='space-y-2'>
        <li className="hover:text-blue-500 cursor-pointer">Music</li>
        <li className="hover:text-blue-500 cursor-pointer">Sports</li>
        <li className="hover:text-blue-500 cursor-pointer">Gaming</li>
        <li className="hover:text-blue-500 cursor-pointer">Movies</li>
        <li className="hover:text-blue-500 cursor-pointer">Watch history</li>
      </ul>
    </div>
  )
}

export default Sidebar