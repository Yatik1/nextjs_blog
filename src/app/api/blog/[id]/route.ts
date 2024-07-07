import BlogModel from "@/model/Blog"
import { NextResponse } from "next/server"

export async function GET( 
    req:Request ,
    {params} : {params : {id:string}}
) {
    try {
        
        if(!params.id) {
            return new NextResponse("Valid Blog Id is Required " , {status : 400})
        }

        const blog = await BlogModel.findById(params.id)

        return NextResponse.json(blog)

    } catch (error) {
        console.log("[BLOG_ID GET ERROR]" , error)
        return new NextResponse("Internal Error" , {status : 500})
    }
}