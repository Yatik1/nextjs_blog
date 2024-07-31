"use client";

import { useEffect, useState } from "react";
import { CldUploadWidget } from 'next-cloudinary';
import axios from "axios";
import { Blogs } from "@/types/types";
import Image from "next/image";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

interface FormProps {
  userId?:string
  data?:Blogs
}

const FormEditor : React.FC<FormProps>= ({userId , data}) => {

  const [title, setTitle] = useState<string>(data?.title || "")
  const [content, setContent] = useState<string>(data?.content ||"")
  const [coverImg, setCoverImg] = useState<string>(data?.coverImg ||"")
  const [disable, setDisable] = useState<boolean>(true)

  const router = useRouter()

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setContent(data.content);
      setCoverImg(data.coverImg);
    }
  }, [data]);


  useEffect(() => {
    if (title.length > 0 && content.length > 2 && coverImg) {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [title, content,coverImg])

  const onUpload = (result: any | string) => {
    if (result.info && result.info.url) {
      setCoverImg(result.info.url)
    }
  };

  async function handleSubmit() {

    const postBlog : Blogs = {
      title,
      content,
      coverImg,
      authorId:userId
    }

    try {
      let response
      if(data) {
        response = await axios.patch(`/api/blog/${data._id}` , postBlog , {
          headers : {
            "Content-Type" : "application/json",
          }
        })
        toast.success("Update Successfully")
      } else {
        response = await axios.post("/api/blog/write" , postBlog, {
          headers: {
            "Content-Type":"application/json"
          }
        })
        toast.success("Blog Posted")
      }     
      router.push("/")
      router.refresh()
    } catch (error) {
      console.log("[POST DATA ERROR]" , error)
    }
  }

  return (
    <div className='flex flex-col items-start justify-center px-10 w-full gap-2'>
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
        className='px-4 py-2 rounded-lg border border-stone-400 focus:outline-none md:w-3/4 h-[10rem]'
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        value={content}
      />

      <label className='font-bold text-[1.5rem] mt-3'>Add Cover Image</label>
      {coverImg && (
          <div key={coverImg} className="relative w-[350px] h-[200px] rounded-md overflow-hidden">
            <div className="z-10 absolute top-2 right-2">
              <button className="bg-red-600 text-white p-2 rounded-md" onClick={() => setCoverImg("")}>
                <Trash className="h-4 w-4" />
              </button>
            </div>
            <Image 
              fill
              className="object-cover"
              alt="Image"
              src={coverImg} 
            />
          </div>
      )}

      <CldUploadWidget uploadPreset="next_blog" onUpload={onUpload}>
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
        onClick={handleSubmit}
        disabled={disable}
      >{data ? "Update" : "Post"}</button>
    </div>
  )
}

export default FormEditor
