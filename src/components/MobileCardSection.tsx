import { Blogs } from '@/types/types'
import React from 'react'
import Card from './ui/Card'
import Link from 'next/link'

const MobileCardSection = ({blogs} : {blogs : Blogs[]}) => {

  return (
    <div className="h-fit w-screen md:hidden">
        <div className='flex flex-col gap-2 justify-start items-center mb-3'>
        {blogs.map((data,index) => (
            <Link href={`/blog/${data._id}`}>
              <Card
              id={data._id}
              title={data.title}
              cover={data.coverImg}
              index={index}
            /> 
            </Link>
        ))}
    </div>
    </div>
  )
}

export default MobileCardSection