"use client"

import CardSection from "@/components/CardSection"
import MobileCardSection from "@/components/MobileCardSection"
import { Blogs } from "@/types/types";
import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  
  const [data , setData] = useState<Blogs[] | undefined>(undefined)
  const [loading , setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchBlog = async () => {

        try {    
          setLoading(true)

          const response = await axios.post<Blogs[]>(`/api/blog/`)
          setData(response.data)

        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
    }

    fetchBlog()
  } , [])

  if (loading) {
      return <p className=" h-screen flex justify-center items-center text-slate-500">Loading...</p>;
  }

  if (data?.length === 0) {
      return <p className='h-screen flex justify-center items-center text-slate-500'>No Blogs Available. ❌</p>;
  }
  return (
    <div className="md:overflow-x-hidden ">

      <div className="flex items-center justify-center">
        <h1 className="font-bold text-[3rem] pt-[1.2rem]">All Blogs {`->`}</h1>
      </div>

      <CardSection blogs = {data} />
      <MobileCardSection blogs={data} />

    </div>
      
  )
}

export default HomePage
