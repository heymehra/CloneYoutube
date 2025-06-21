import React, { useState } from 'react'

const Demo2 = () => {
    const [y, sety] = useState(0);
    let x = 10;
    return (
        <div className='bg-blue-500 mt-24 p-2 w-96 h-96 border-2 border-black'>
            <div>
                <button onClick={() => x = x + 1}
                    className='bg-green-400 px-2 m-4 text-3xl'>Increase</button>
                <span className='font-bold text-xl'>let={x}</span>
            </div>
            <div>
                <button onClick={()=>sety(y+1) } className='bg-gray-600 px-2 m-4 text-3xl'>state</button>
                <span className='font-bold text-xl'>let={y}</span>
            </div>
        </div>
    )
}

export default Demo2