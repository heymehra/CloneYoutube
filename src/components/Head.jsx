import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setsuggestion] = useState([]);
  const [showSuggestion, setHideSuggestion] = useState(false)

  const searchCache = useSelector(store=>store.search);

  useEffect(() => {
    const timer = setTimeout(() =>{
    if(searchCache[searchQuery]){
      setsuggestion(searchCache[searchQuery]);
    }else{
      getSearchSuggestions()
    }
  },200);
    return () => {
      clearTimeout(timer)
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setsuggestion(json[1]);

    dispatch(cacheResults({
      [searchQuery]:json[1], 
    }))
  }

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className="grid grid-cols-12 items-center p-5 m-2 mt-0 shadow-xl bg-white fixed top-0 left-0 right-0 z-50">
      {/* Left: Hamburger + Logo */}
      <div className="flex items-center gap-4 col-span-2">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src="https://cdn0.iconfinder.com/data/icons/rounded-basics/24/rounded__menu-512.png"
          alt="hamburger"
        />
        <img
          className="h-12"
          src="https://www.freepnglogos.com/uploads/youtube-video-logo-png-4.png"
          alt="youtube logo"
        />
      </div>

      {/* Middle: Search bar + Suggestions */}
      <div className="col-span-8 relative">
        <div className="flex w-full">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={()=>setHideSuggestion(true)}
            onBlur={()=>setHideSuggestion(false)}
            placeholder="Search"
            className="border border-gray-400 px-4 py-2 w-full rounded-l-full"
          />
          <button className="bg-gray-200 px-4 py-2 rounded-r-full border border-l-0 border-gray-400"> Search
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestion && (
          <div className="absolute bg-white py-2 px-2 w-full border border-gray-100 rounded-lg shadow-lg mt-1 z-10">
            <ul>
              {suggestion.map((s) => (
                <li
                  key={s}
                  className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: User Icon */}
      <div className="flex justify-end col-span-2">
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
          alt="User Icon"
        />
      </div>
    </div>
  )
}

export default Head