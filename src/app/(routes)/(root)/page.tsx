"use client"

import CardSection from "@/components/CardSection"
import { useEffect, useState} from "react"
import MobileCardSection from "@/components/MobileCardSection"
import { Blogs } from "@/types/types";
import axios from "axios";

const HomePage = () => {

  const [data , setData] = useState<Blogs[] | undefined>(undefined)
  const [loading , setLoading] = useState<boolean>(false)
  const [isMounted , setIsMounted] = useState<boolean>(false)

  useEffect(() => {
    setIsMounted(true)
  } , [])

  useEffect(() => {
    const fetchBlog = async () => {
        try {
          
          setLoading(true)

          const response = await axios.get<Blogs[]>(`/api/blog/` , {
            headers : {
              'Cache-Control' : 'no-cache',
            }
          })
          setData(response.data)

        } catch (error) {
          console.log(error)
        } finally {
          setLoading(false)
        }
    }

    fetchBlog()
  } , [])

  if(!isMounted) return null;

  if (loading) {
    return <p className="flex w-full h-screen items-center justify-center">Loading ..... </p>
  }

  if(!loading && data?.length === 0) {
    <p className='mt-[10rem] flex justify-center items-start text-slate-500'>No Blogs Available. ❌</p>
  }

  return (
    <div className="md:overflow-x-hidden ">

      <div className="flex items-center justify-center">
        <h1 className="font-bold italic text-[3rem] pt-[1.2rem]">All Blogs {`->`}</h1>
      </div>

      <CardSection blogs = {data} />
      <MobileCardSection blogs={data} />

    </div>
      
  )
}

export default HomePage
