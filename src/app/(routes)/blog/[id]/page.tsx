"use client"

import { Blogs } from '@/types/types'
import { formatDate } from '@/utils/dateFormat'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { Edit, Trash } from 'lucide-react'
import Image from 'next/image'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'


const BlogPage : React.FC = () => {

    const params = useParams();
    const router = useRouter();

    const {id} = params as {id:string}

    const {userId} = useAuth()

    if(!userId) {
      router.push("/sign-in")
    }

    const [data , setData] = useState<Blogs | undefined>(undefined)
    const [loading , setLoading] = useState<boolean>(false)

    useEffect(() => {
      const fetchBlogById = async (id : string) => {
          try {
            
            setLoading(true)

            const response = await axios.get<Blogs>(`/api/blog/${id}`)
            setData(response.data)

          } catch (error) {
            console.log(error)
          } finally {
            setLoading(false)
          }
      }

      fetchBlogById(id)
    } , [id])

    const onDelete = async () =>  {
      try {
          setLoading(true)
          await axios.delete(`/api/blog/${data?._id}`)

          router.push("/")
          toast.success("Delete successful")
          router.refresh()

      } catch (error) {
          toast.error(" Deletion Failed")
          console.log("Error : " , error)
      } finally {
        setLoading(false)
      }
    }


  return (
    <div className='w-full flex items-center justify-center'>
      {loading ? (
        <p className='text-xl h-screen w-full flex items-center justify-center text-slate-500'>Loading ..... </p>
      ) : (
        data ? (
          <div className="w-screen mx-[10vw] py-[1.5rem] flex flex-col items-center justify-start bg-white">
                  
              <div className="flex flex-col justify-center items-center leading-[2.5rem] w-full p-3 border-b border-stone-200 mb-4 gap-3">
                <h1 className='md:text-[2.5rem] text-[1.4rem] font-semibold tracking-tighter leading-6 md:leading-none'>{data.title}</h1>
                
                <div className="flex flex-col justify-center items-center gap-y-2">
                  <p className="text-sm text-gray-500">{formatDate(data.createdAt)}</p>

                  { 
                    userId === data.authorId && 
                    <div className="flex justify-center items-center gap-2">
                    
                    
                      <button onClick={() => router.push(`/write/${data._id}`)} className='flex items-center justify-center gap-1 py-1 px-2 bg-black hover:bg-gray-600 rounded-md text-white cursor-pointer text-[0.9rem] md:text-sm'>
                        <span className='hidden md:block'>Edit</span> <Edit className='md:w-4 md:h-4 w-[1.35rem] h-[1.35rem]' />
                      </button>

                      <button onClick={onDelete} className='flex items-center justify-center gap-1 py-1 px-2 bg-red-600 rounded-md text-white cursor-pointer text-[0.9rem] md:text-sm'>
                        <span className='hidden md:block'>Delete</span> <Trash className='md:w-4 md:h-4 w-[1.35rem] h-[1.35rem]' />
                      </button>

                    </div>
                  }

                </div>

              </div>
  
              <div className="relative md:w-[55rem] md:h-[30rem] w-[23rem] h-[20rem] rounded-[2rem] overflow-hidden">
                <Image 
                  src={data?.coverImg}
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover"
                  layout="fill"
                  objectFit='cover'
                />
              </div>
  
              <div className="w-full mt-2 py-4 md:px-[5rem] px-2">
                <p className='tracking-tight '>{data.content}</p>
              </div>
          </div>
        ) : (
          <p className='h-screen w-full flex items-center justify-center'> ❌ No such Blog exist. </p>
        )
      )}
    </div>
  )
}

export default BlogPage