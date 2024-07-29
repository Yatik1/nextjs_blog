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
    <div className='w-full flex items-center justify-center'>
      {loading ? (
        <p className='text-xl h-screen w-full flex items-center justify-center'>Loading ..... </p>
      ) : (
        data ? (
          <div className="w-screen mx-[10vw] py-[1.5rem] flex flex-col items-center justify-start bg-white">
                  
              <div className="flex flex-col justify-center items-center leading-[2.5rem] w-full p-3 border-b border-stone-200 mb-4 gap-3">
                <h1 className='md:text-[2.5rem] text-[1.4rem] font-semibold tracking-tighter leading-6 md:leading-none'>{data.title}</h1>
                <p className="text-sm text-gray-500">{formatDate(data.createdAt)}</p>
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