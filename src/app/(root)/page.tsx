"use client"

import CardSection from "@/components/CardSection"
import useBlog from "../hooks/useBlogModal"
import { useEffect } from "react"
import MobileCardSection from "@/components/MobileCardSection"


const HomePage = () => {

  const {blogs , loading , fetchBlogs} = useBlog()

  useEffect(() => {
    fetchBlogs()
  } , [])

  if (loading) {
    return <p className="flex w-full h-screen items-center justify-center">Loading ..... </p>
  }

  if(blogs.length === 0) {
    <p className='mt-[10rem] flex justify-center items-start w-screen h-screen text-slate-500'>No Blogs Available. ❌</p>
  }

  return (
    <div className="relative h-screen min-h-screen bg-white md:overflow-x-hidden">

      <div className="flex items-center justify-center">
        <h1 className="font-bold italic text-[3rem] mt-[4rem] pt-[3rem]">All Blogs{"->"}</h1>
      </div>

      <CardSection blogs = {blogs}/>
      <MobileCardSection blogs={blogs}/>

    </div>
      
  )
}

export default HomePage
