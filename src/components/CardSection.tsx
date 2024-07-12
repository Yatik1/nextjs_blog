"use client"

import { useEffect, useState } from 'react'
import Card from './ui/Card'
import { Blogs } from '@/types/types'
import { getAllBlogs } from '@/actions/getDataAll'
import {motion} from "framer-motion"
import MobileCardSection from './MobileCardSection'


const CardSection = ({blogs} : {blogs : Blogs[]}) => {

    return (
        <div className="absolute flex items-start pl-7 pb-[3rem]">
            
            {blogs.length === 0 ? 
                (
                    <p className='mt-[10rem] flex justify-center items-start w-screen h-screen text-slate-500'>No Blogs Available. ❌</p>
                ) :
                (
                    <>
                        <motion.div 
                            initial={{ x: 0 }}
                            animate={{ x: "-50%" }}
                            transition={{ repeat: Infinity, ease: "linear", duration:30, delay:0.5 }}
                            className="gap-[1.5rem] items-start hidden md:flex"
                        >
                            {blogs.map((data,index) => (
                                <Card 
                                    id={data._id}
                                    title={data.title}
                                    cover={data.coverImg}
                                    author='Yatik'
                                    index={index}
                                />  
                            ))}
                            {blogs.map((data,index) => (
                                <Card 
                                    id={data._id}
                                    title={data.title}
                                    cover={data.coverImg}
                                    index={index}
                                />  
                            ))}
                        </motion.div>                        
                    </>
                )
            }          
        </div>
    )
}

export default CardSection