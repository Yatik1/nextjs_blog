"use client"

import { Blogs } from '@/types/types'
import axios from 'axios'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const BlogPage : React.FC = () => {

    const params = useParams();
    const {id} = params as {id:string}

    const [data , setData] = useState<Blogs | null>(null)
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

    console.log(data)

  return (
    <div>This is Blog Page of Blog id : {id} </div>
  )
}

export default BlogPage