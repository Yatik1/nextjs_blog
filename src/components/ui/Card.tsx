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

      const isMobile = window.innerWidth <= 768
      
        const handleMouseEnter = () => {
          gsap.to(cardRef.current , {
              scale:isMobile ? 1.052 : (isThird ? 1.052 : 1.093),
              width:isMobile ? "90vw" : (isThird ? "" : "42vw"),
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
              width:isMobile ? "" : (isThird ? "" : "21vw"),
              marginRight:0,
              marginLeft:0,
              duration:0.5,
              ease:"power3.out"
          })
        }

        cardRef.current.addEventListener("mouseenter" , handleMouseEnter)
        cardRef.current.addEventListener("mouseleave" , handleMouseLeave)

    }
  } , [])

  return(


    <div 
      className={`relative bg-stone-300 ${isThird ? 'w-[90vw] h-[80vw] md:w-[42vw] md:h-[30vw]' : 'w-[90vw] h-[80vw] md:w-[21vw] md:h-[30vw]'} rounded-[2rem] overflow-hidden md:mt-[2.4rem] mb-[2vw]`}
      ref={cardRef}
      key={index} 
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
    
    <div className="absolute -left-2 -bottom-1 z-[9] flex items-center justify-center leading-3 bg-neutral-50 py-[0.6rem] px-[1.3rem] w-fit rounded-full">
      <h2 className="text-xl font-semibold tracking-tighter">{title}</h2>
    </div>

  </div>

  )
}

export default Card