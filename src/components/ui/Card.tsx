"use client"

import Image from "next/image"
import Avatar from "./Avatar"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"

interface CarProps {
    title:string
    author:string
    cover:string
    index:number
}


const Card : React.FC<CarProps>= ({title,author,cover,index}) => {

  const linkRef = useRef<HTMLDivElement>(null)
  
  const isEven = index % 2 === 1

  return(
    <div key={index} className="flex flex-col gap-5 items-start h-full w-auto px-[1vw]">
      <div 
        className={`relative bg-stone-300 ${isEven ? 'w-[42vw] h-[30vw]' : 'w-[21vw] h-[30vw]'} rounded-[2rem] overflow-hidden mt-[6rem]`}
        onMouseEnter={() => {console.log(linkRef)}}
      >
          
          <Image 
            src={cover}
            alt="image"
            className="absolute inset-0 w-full h-full object-cover"
            layout="fill"
            objectFit="cover"
          />

          <Avatar 
            ref={linkRef}
            styles="absolute right-2 top-2 bg-black"
            icon={<ArrowUpRight/>}          
          />

      </div>
      
      <div className="flex flex-col leading-3 w-full p-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-[1rem] underline italic ">{author}</p>
      </div>

    </div>
  )
}

export default Card