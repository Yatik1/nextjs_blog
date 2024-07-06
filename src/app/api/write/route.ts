import dbConnect from "@/lib/dbConnect"
import BlogModel from "@/model/Blog"
import { NextResponse } from "next/server"



export async function POST(req:Response) {
    await dbConnect()
    
    try {
        const body = await req.json()
        const {title, content ,coverImg} = body

        if(!title) {
            return new NextResponse("Title is required , Please Provide Title for the your Blog" , {status : 400})
        }

        if(!content) {
            return new NextResponse("Content of a blog is required , Please provide appropriate content !" , {status : 400})
        }

        if(!coverImg) {
            return new NextResponse("Cover-Image is required ,please provide cover image for Blog." , {status : 400})
        }

        const newBlog = new BlogModel({
            title,
            content,
            coverImg,
            createdAt: new Date()
        })

        await newBlog.save()

        return NextResponse.json(newBlog)

    } catch (error) {
        console.log("[BLOG-POST]" , error)
        return new NextResponse("Internal Error" , {status : 500})
    }
}