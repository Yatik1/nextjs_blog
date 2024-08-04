"use client";

import CardSection from "@/components/CardSection"
import MobileCardSection from "@/components/MobileCardSection"
import { Blogs } from "@/types/types";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url : string) => axios.get(url).then(res => res.data)

const HomePage = () => {

  const {data , error , isLoading } = useSWR<Blogs[]>('/api/blog' , fetcher, {refreshInterval : 10000}) 

  if (isLoading) {
    return <p className="flex w-full h-screen items-center justify-center">Loading ..... </p>
  }

  if (error) {
    console.error(error);
    return <p className="flex w-full h-screen items-center justify-center">Failed to load</p>
  }

  if (!isLoading && data?.length === 0) {
    return <p className='mt-[10rem] flex justify-center items-start text-slate-500'>No Blogs Available. ❌</p>
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
