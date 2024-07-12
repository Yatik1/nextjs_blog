import { Blogs } from '@/types/types'
import React from 'react'
import Card from './ui/Card'

const MobileCardSection = ({blogs} : {blogs : Blogs[]}) => {

  return (
    <div className="flex items-center justify-center h-screen w-screen mb-9 md:hidden bg-black overflow-auto">
        <div className='flex flex-col gap-2 justify-center items-center '>
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