import { Blogs } from '@/types/types'
import React from 'react'
import Card from './ui/Card'

const MobileCardSection = ({blogs} : {blogs : Blogs[]}) => {

  return (
    <div className="h-fit w-screen md:hidden py-[4vw]">
        <div className='flex flex-col gap-2 justify-start items-center mb-3 px-4'>
        {blogs.map((data,index) => (
            <Card
            id={data._id}
            title={data.title}
            cover={data.coverImg}
            index={index}
        /> 
        ))}
    </div>
    </div>
  )
}

export default MobileCardSection