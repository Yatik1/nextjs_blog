import BlogModel from "@/model/Blog"
import { auth } from "@clerk/nextjs/server"
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

export async function PATCH(
    req:Request , 
    {params} : {params : {id : string}}
) {
    try {

        const {userId} = auth()

        if(!userId) {
            return new NextResponse("UnAuthorized" , {status : 401})
        }
        
        const body = await req.json()
        const {title , content , coverImg} = body

        if(!params.id) {
            return new NextResponse("Valid Blog Id is Required " , {status : 401})
        }

        if(!title) {
            return new NextResponse("Title is Required", {status : 400})
        }

        if(!content) {
            return new NextResponse("Content of the Blog is required" , {status : 400})
        }

        if(!coverImg) {
            return new NextResponse("Cover Image Link is required" , {status : 400})
        }

        const updateBlog = await BlogModel.findByIdAndUpdate(
            params.id , 
            {title , content , coverImg}
        )

        return NextResponse.json(updateBlog)

    } catch (error) {
        console.log("[BLOGID_PATCH]" , error)
        return new NextResponse("Internal Error" , {status : 500})
    }
}

export async function DELETE (
    req:Request ,
    {params} : {params : {id:string}}
) {
    
    try {

        const {userId} = auth()

        if(!userId) {
            return new NextResponse("UnAuthorized" , {status : 401})
        }
        
        if(!params.id) {
            return new NextResponse("Invalid Id" , {status : 401})
        }

        const deleteBlog = await BlogModel.findByIdAndDelete(params.id)

        return NextResponse.json(deleteBlog)

    } catch (error) {
        console.log("[BLOGID_DELETE]" , error)
        throw new NextResponse("Internal Error" , {status : 500})
    }

}