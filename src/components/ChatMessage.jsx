import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
          className="h-10"
          src="https://static.vecteezy.com/system/resources/previews/000/574/512/original/vector-sign-of-user-icon.jpg"
          alt="User Icon"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage