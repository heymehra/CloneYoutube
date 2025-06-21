import React, { useState,useMemo } from 'react'
import { findPrime } from '../utils/helper'

const Demo = () => {
    const [text, setText] = useState(0)
    const [theme, settheme] = useState(false);

    const prime = useMemo(()=>findPrime(text),[text]);

    return (
        <div className={'ml-52 mt-24 p-2 w-96 h-96 border-2 border-black ' + (theme ? 'bg-green-600 text-white' : '')}
>
            <div>
                <input className='border-2 border-gray-700 px-2 w-72'
                    placeholder='enter number'
                    type="number"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <button
                    onClick={() => settheme(!theme)}
                    className='bg-green-500 ml-3 border-2 border-black px-2'>
                    toggle
                </button>
            </div>
            <div className='text-lg'>
                <h1>nth-prime: {prime}</h1>
            </div>
        </div>
    )
}

export default Demo