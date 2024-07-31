"use client"

import FormEditor from '@/components/FormEditor'
import { Blogs } from '@/types/types'
import { useAuth } from '@clerk/nextjs'
import axios from 'axios'
import { redirect, useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const EditBlog = () => {

    const [data, setData] = useState<Blogs | undefined>(undefined)
    const [loading , setLoading] = useState<boolean>(false)

    const params = useParams()
    const {userId} = useAuth()

    const {id} = params as {id :string}

    if(!userId) {
      redirect("/sign-in")
    }


    useEffect(() => {
      (async () => {
        const fetchBlogById = async (id: string) => {
          try {
            setLoading(true);
            const response = await axios.get<Blogs>(`/api/blog/${id}`);
            setData(response.data);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchBlogById(id);
      })();
    }, [id]);
  
    return (
      <div className="flex items-center justify-center overflow-x-hidden">
          <div className="flex flex-col items-start justify-start md:w-11/12 md:p-7 p-[4rem] gap-10 md:gap-0">
              <h1 className="font-bold text-[2rem] md:text-[4rem] w-full flex items-center justify-center">Edit your blog</h1>
              <FormEditor userId={userId} data={data} />
          </div>
      </div>
    )
}

export default EditBlog