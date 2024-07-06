"use client"

import { useParams } from 'next/navigation'
import React from 'react'

const BlogPage = () => {
    const params = useParams()
    const {id} = params

  return (
    <div>This is Blog Page of Blog id : {id} </div>
  )
}

export default BlogPage