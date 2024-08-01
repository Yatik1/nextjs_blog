"use client"

import CardSection from "@/components/CardSection"
import useBlog from "../hooks/useBlogModal"
import { useEffect, useState} from "react"
import MobileCardSection from "@/components/MobileCardSection"

const HomePage = () => {

  const [isMounted, setIsMounted] = useState(false)
  const {blogs , loading , fetchBlogs} = useBlog()

  useEffect(() => {
    setIsMounted(true)
  } , [])

  useEffect(() => {
    fetchBlogs()
  } , [fetchBlogs])

  if(!isMounted) return null;


  if (loading) {
    return <p className="flex w-full h-screen items-center justify-center">Loading ..... </p>
  }

  if(blogs.length === 0) {
    <p className='mt-[10rem] flex justify-center items-start text-slate-500'>No Blogs Available. ❌</p>
  }

  console.log(blogs)


  return (
    <div className="md:overflow-x-hidden ">

      <div className="flex items-center justify-center">
        <h1 className="font-bold italic text-[3rem] pt-[1.2rem]">All Blogs {`->`}</h1>
      </div>

      <CardSection blogs = {blogs}/>
      <MobileCardSection blogs={blogs}/>

    </div>
      
  )
}

export default HomePage
