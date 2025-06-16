import React from 'react';

const Videocard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info || {};
  const { channelTitle, title, thumbnails } = snippet || {};

  return (
    <div className="p-4 m-4 w-72 shadow-md rounded-xl bg-white hover:shadow-xl transition-shadow duration-200">
      <img
        className="rounded-lg w-full object-cover"
        src={thumbnails?.medium?.url}
        alt="Video thumbnail"
      />
      <div className="mt-3">
        <h3 className="text-md font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{channelTitle}</p>
        <p className="text-sm text-gray-500">{statistics?.viewCount} views</p>
      </div>
    </div>
  );
};

export default Videocard;
