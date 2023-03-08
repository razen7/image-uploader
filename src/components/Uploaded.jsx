import React from 'react'

export default function Uploaded({ downloadUrl }) {
    return (
        <div className='flex flex-col gap-3 items-center bg-white p-5 shadow-md rounded-md'>
            <div className='bg-green-400 rounded-full w-12 h-10 flex items-center justify-center shadow-md'>
                <img src="done.svg" alt="" className='w-[80%]' />
            </div>
            <div className='text-lg'>
                Uploaded Successfully!
            </div>

            <div className="w-[300px] min-w-full h-[250px] overflow-hidden shadow-md rounded-lg my-3" >
                <img src={downloadUrl} alt="" />
            </div>

            <div className='border-2 p-[2px] rounded w-[100%] flex justify-between'>
                <input type="url" className='rounded-full focus-visible:outline-none text-xs px-2 py-1 w-[72%]' value={downloadUrl} />
                <button className='transition ease-in-out delay-15 bg-blue-500 active:bg-blue-700 rounded-full text-xs px-2 py-1' onClick={()=>navigator.clipboard.writeText(downloadUrl)} >Copy Link</button>
            </div>

        </div>
    )
}
