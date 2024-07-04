"use client"

import { useEffect, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';

const FormEditor = () => {

  const [title, setTitle] = useState<string>("")
  const [content, setContent] = useState<string>("")
  const [coverImg, setCoverImg] = useState<string>("")
  const [disable, setDisable] = useState<boolean>(true)

  useEffect(() => {
    if (title.length > 0 && content.length > 2 && !coverImg) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [title, content])

  const handleUpload = (result: any) => {
    if (result.info && result.info.url) {
      setCoverImg(result.info.url)
    }
  };

  return (
    <div className='flex flex-col items-start justify-center p-10 w-full gap-2'>
      <label className='font-bold text-[1.5rem]'>Title</label>
      <input
        type="text"
        placeholder='Title..'
        className='px-4 py-2 rounded-lg border border-stone-400 focus:outline-none'
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        value={title}
      />

      <label className='font-bold text-[1.5rem] mt-3'>Write your Story</label>
      <textarea
        placeholder='Write what you think..'
        className='px-4 py-2 rounded-lg border border-stone-400 focus:outline-none w-1/2 overflow-hidden'
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        value={content}
      />

      <label className='font-bold text-[1.5rem] mt-3'>Add Cover Image</label>
      <CldUploadWidget uploadPreset="next_blog" onUpload={handleUpload}>
        {({ open }) => {
          return (
            <button
              onClick={() => open()}
              className='bg-black text-white text-md px-3 py-2 rounded-md w-[10rem] disabled:cursor-not-allowed disabled:bg-gray-500'
            >
              Upload an Image
            </button>
          );
        }}
      </CldUploadWidget>

      <button
        className='bg-black mt-5 text-white text-md px-3 py-2 rounded-md w-[5rem] disabled:cursor-not-allowed disabled:bg-gray-500'
        onClick={() => {
          console.log({ title, content, coverImg })
        }}
        disabled={disable}
      >Post</button>
    </div>
  )
}

export default FormEditor
