import React from 'react'
import { FileUploader } from 'react-drag-drop-files'
export default function Upload({ uploadImage, uploadDraggedImg, invalidFile }) {

    return (
        <>
            <div className='flex flex-col gap-4 items-center bg-white p-5 shadow-md rounded-md'>
                <div className='text-xl'>
                    Upload your image
                </div>
                <div className='text-[11px] text-[#828282]'>
                    File should be Jpeg, Png,...
                </div>

                <FileUploader classes="file-uploader" handleChange={uploadDraggedImg} name="image" types={["JPG", "PNG", "GIF"]} />

                <div>
                    Or
                </div>

                <div className='w-52'>
                    <input type="file" name='image' accept='image/*' onChange={(e) => uploadImage(e)} />
                </div>

                <div className={`p-2 text-center text-red-600 w-[100%] rounded-md bg-red-200 ${invalidFile ? 'opacity-100' : 'opacity-0'} transition-all duration-300 ease-linear`}>
                    File should be Jpeg, Png,...
                </div>
            </div>

        </>

    )
}
