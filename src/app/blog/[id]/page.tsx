"use client"

import { Blogs } from '@/types/types'
import { formatDate } from '@/utils/dateFormat'
import axios from 'axios'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const BlogPage : React.FC = () => {

    const params = useParams();
    const {id} = params as {id:string}

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


  return (
    <div className='bg-gray-100 w-full flex items-center justify-center'>
      {loading ? (
        <p className='text-xl h-screen w-full flex items-center justify-center'>Loading ..... </p>
      ) : (
        data ? (
          <div className="w-[90vw] mx-[10vw] mt-[7vw] py-[1.5rem] flex flex-col items-center justify-start bg-white border-b">
                  
              <div className="flex flex-col justify-center items-center leading-[2.5rem] w-full p-3 border-b border-stone-200 mb-4">
                <h1 className='text-[2.5rem] font-semibold tracking-tighter'>{data.title}</h1>
                <p className="text-sm text-gray-500">{formatDate(data.createdAt)}</p>
              </div>
  
              <div className="relative w-[55rem] h-[30rem] rounded-[2rem] overflow-hidden">
                <Image 
                  src={data?.coverImg}
                  alt="image"
                  className="absolute inset-0 w-full h-full object-cover"
                  layout="fill"
                  objectFit='cover'
                />
              </div>
  
              <div className="w-full mt-[2.5rem] py-4 align-center px-[5rem]">
                <p>{data.content}</p>
              </div>
              <hr className=' w-4/5' />
          </div>
        ) : (
          <p className='h-screen w-full flex items-center justify-center'> ❌ No such Blog exist. </p>
        )
      )}
    </div>
  )
}

export default BlogPage