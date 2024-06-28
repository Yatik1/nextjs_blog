"use client"

const FormEditor = () => {
  return (
    <div className='flex flex-col items-start justify-center p-10 w-full gap-2'>
        <label className='font-bold text-[1.5rem]'>Title</label>
        <input type="text" placeholder='Title..' className='px-4 py-2 rounded-lg border border-stone-400 focus:outline-none' />

        <label className='font-bold text-[1.5rem] mt-3'>Write your Story</label>
        <textarea  placeholder='Write what you think..' className='px-4 py-2 rounded-lg border border-stone-400 focus:outline-none w-1/2 overflow-hidden' />

        <button
            className='bg-black text-white text-md px-3 py-2 rounded-md w-[5rem]'
            onClick={() => alert("clicked")}
        >Post</button>
    </div>
  )
}

export default FormEditor