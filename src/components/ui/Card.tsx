"use client"

import Image from "next/image"
import Avatar from "./Avatar"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"
import { useRouter } from "next/navigation"

interface CardProps {
    id?:string
    title:string
    author?:string
    cover:string
    index:number
}


const  Card : React.FC<CardProps>= ({title,author,cover,index , id}) => {

  const linkRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const isThird = (index + 1) % 3 === 0

  function handleClick() {
    router.push(`/blog/${id}`)
  }

  return(
    <div key={index} className="flex flex-col gap-5 items-start h-full w-auto px-[1vw]">

      <div 
        className={`relative bg-stone-300 ${isThird ? 'w-[42vw] h-[30vw]' : 'w-[21vw] h-[30vw]'} rounded-[2rem] overflow-hidden mt-[3rem]`}
        onMouseEnter={() => {console.log(linkRef)}}
      >
          
          <Image 
            src={cover}
            alt="image"
            className="absolute inset-0 w-full h-full"
            layout="fill"
            objectFit="cover"
          />

          <Avatar 
            ref={linkRef}
            styles="absolute right-2 top-2 bg-stone-800 hover:bg-stone-100 hover:text-black"
            icon={<ArrowUpRight/>}      
            onclick= {handleClick}
          />

      </div>
      
      <div className="flex flex-col leading-3 bg-purple-50 p-2">
        <h2 className="text-xl font-semibold tracking-tighter">{title}</h2>
        <p className="text-[1rem] underline italic ">{author}</p>
      </div>

    </div>
  )
}

export default Card