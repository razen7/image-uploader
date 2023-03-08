import React from 'react'
import { FileUploader } from 'react-drag-drop-files'
export default function Upload({ uploadImage, uploadDraggedImg }) {

    return (
        <div className='flex flex-col gap-4 items-center bg-white p-5 shadow-md rounded-md'>
            <div className='text-xl'>
                Upload your image
            </div>
            <div className='text-[11px] text-[#828282]'>
                File should be Jpeg, Png,...
            </div>

            {/* <div className='w-48 h-48 bg-[#EAEAEF] shadow-sm rounded-lg flex flex-col justify-center items-center border-2 border-dashed border-black'>
                <img src="cloud_upload.svg" alt="" className='h-[80%]' />
                <div className='text-[11px]'>
                    Drag & Drop your image here
                </div>
            </div> */}

            <FileUploader classes="file-uploader" handleChange={uploadDraggedImg} name="image" types={["JPG", "PNG", "GIF"]} />

            <div>
                Or
            </div>

            <div className='w-52'>
                <input type="file" name='image' accept='image/*' onChange={(e) => uploadImage(e)} />
            </div>
        </div>
    )
}
