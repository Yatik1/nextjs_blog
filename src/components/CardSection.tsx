"use client"

import { useEffect, useState } from 'react'
import Card from './ui/Card'
import { Blogs } from '@/types/types'
import { getAllBlogs } from '@/actions/getDataAll'

const CardSection = () => {

    const [blogs,setBlogs] = useState<Blogs[]>([])
    const [loading,setLoading] = useState<boolean>(false)
    
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                setLoading(true)

                const data = await getAllBlogs()
                setBlogs(data)

            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchBlogs()

    } , [])

    return (
        <div className="absolute h-full w-auto flex items-start pl-7">
            
            {blogs.length === 0 ? 
                (
                    <p className='mt-[10rem] flex justify-center items-start w-screen h-screen text-slate-500'>No Blogs Available. ❌</p>
                ) :
                (
                    blogs.map((data,index) => (
                        <Card 
                            id={data._id}
                            title={data.title}
                            cover={data.coverImg}
                            index={index}
                        />  
                    ))
                )
            }          
        </div>
    )
}

export default CardSection