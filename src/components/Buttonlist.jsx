import React from 'react'
import Button from './Button'

const Buttonlist = () => {
  const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "Streming", "Sports"]
  return (
    <div className="flex flex-wrap gap-3 px-4 py-2 justify-center sm:justify-start">
      {list.map((names, index) => (
        <Button key={index} name={names} />
      ))}
    </div>

  )
}

export default Buttonlist