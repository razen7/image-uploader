import React from 'react'

export default function Uploading() {
    return (
        <div className='w-60 flex flex-col gap-4 items-center bg-white p-5 shadow-md rounded-md'>
            <div className='text-xl'>
                Uploading...
            </div>
            <div className='w-[100%] h-[7px] rounded-full bg-[#EAEAEF] overflow-hidden'>
                <div className='bg-blue-500 h-[100%] w-[30%] rounded-full loading'></div>
            </div>
        </div>
    )
}
