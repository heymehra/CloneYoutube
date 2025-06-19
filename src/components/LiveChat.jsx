import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from "react-redux"
import ChatMessage from './ChatMessage'
import { addMessage } from '../utils/chatSlice';
import { getRandomMessage, getRandomName } from '../utils/helper';

const LiveChat = () => {
  
  const [livemessage,setlivemessage] = useState()
  const dispatch = useDispatch();
  const chatMessage = useSelector((store)=>store.chat.messages);

  useEffect(()=>{
    const i = setInterval(()=>{
      dispatch
      (addMessage({
        name:getRandomName(),
        message:getRandomMessage()
      }))
    },1500);
    return ()=> clearInterval(i)
  },[])
  return (
    <>
    <div className='h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
      <div>
      {chatMessage.map((c,i)=><ChatMessage
      key={i}
      name={c.name}
      message={c.message}
      />)}
      </div>
      </div>
      <form className='w-full p-2 ml-2 border border-black' onSubmit={(e)=>{e.preventDefault();
        dispatch(addMessage({
          name:"Kunal",
          message:livemessage
        })
      )
      setlivemessage("")
      }}>
        <input className='w-80' 
        placeholder='Your text'
        type="text"
        value={livemessage}
        onChange={(e)=>setlivemessage(e.target.value)} />
        <button className='px-2 mx-2 bg-green-600'>Send</button>
      </form>
    </>
  )
}

export default LiveChat