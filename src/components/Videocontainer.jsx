import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';

const Videocontainer = () => {

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, [])
  const getVideos = async () => {
    const res = await fetch(YOUTUBE_API);
    const json = await res.json();
    setVideos(json.items)

  };
  return (
    <div className='flex flex-wrap'>
      {videos.filter(video => video?.snippet && video?.statistics)
        .map((video) => (
          <Link key={video.id}  to={"/watch?v=" + video.id}>
            <Videocard info={video} />
          </Link>
        ))}
    </div>
  )
}

export default Videocontainer