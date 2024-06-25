"use client"
import Image from "next/image"

interface CarProps {
    title:string
    author:string
    cover:string
}


const Card : React.FC<CarProps>  = ({title,author,cover}) => {
    return (
   
        <div className="relative w-[21vw] h-[28vw] bg-red-600 rounded-[2rem] overflow-hidden">
    <Image
      className="absolute inset-0 w-full h-full object-cover"
      src={cover}
      layout="fill"
      objectFit="cover"
      alt="Sample Image"
    />
    <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 w-full text-white">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{author}</p>
    </div>
  </div>

        

    
    )
}

export default Card