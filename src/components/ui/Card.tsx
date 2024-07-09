"use client"

import Image from "next/image"
import Avatar from "./Avatar"
import { ArrowUpRight } from "lucide-react"
import { useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import { useGSAP } from '@gsap/react';
import gsap from "gsap"

interface CardProps {
    id?:string
    title:string
    author?:string
    cover:string
    index:number
}


const  Card : React.FC<CardProps>= ({title,author,cover,index , id}) => {

  const linkRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)

  const router = useRouter()
  const isThird = (index + 1) % 3 === 0

  function handleClick() {
    router.push(`/blog/${id}`)
  }

  useGSAP(() => {
    if(linkRef.current) {

      const handleMouseEnter = () => {
        gsap.to(linkRef.current , {
          x:-10,
          y:10,
          scale:1.3,
          duration:0.5,
          ease:"power3.out"
        })
      }

      const handleMouseLeave = () => {
        gsap.to(linkRef.current , {
          x:0,
          y:0,
          scale:1,
          duration:0.5,
          ease:"power3.out"
        })
      }

      linkRef.current.addEventListener("mouseenter" , handleMouseEnter)
      linkRef.current.addEventListener("mouseleave" , handleMouseLeave)
    }
  } , [])


  useEffect(() => {
    if(cardRef.current) {
        
        const handleMouseEnter = () => {
          gsap.to(cardRef.current , {
              scale:isThird ? 1.052 : 1.093,
              width:isThird ? "" : "42vw",
              marginRight : "10px",
              marginLeft:"10px",
              dealy:1,
              duration:0.5,
              ease:"power3.out"
          })
        }

        const handleMouseLeave = () => {
          gsap.to(cardRef.current , {
              scale: 1,
              width:isThird ? "" : "21vw",
              marginRight:0,
              marginLeft:0,
              duration:0.5,
              ease:"power3.out"
          })
        }

        cardRef.current.addEventListener("mouseenter" , handleMouseEnter)
        cardRef.current.addEventListener("mouseleave" , handleMouseLeave)

    }
  } , [isThird])

  return(
    <div key={index} className="flex flex-col gap-[1rem] items-start w-auto px-[1vw]">

      <div 
        className={`relative bg-stone-300 ${isThird ? 'w-[42vw] h-[30vw]' : 'w-[21vw] h-[30vw]'} rounded-[2rem] overflow-hidden mt-[3rem]`}
        ref={cardRef}
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