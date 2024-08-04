import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/model/Blog";
import { NextResponse } from "next/server";

export async function GET (req:Request) {

    try {
        await dbConnect()
        
        const blogs = await BlogModel.find()

        return NextResponse.json(blogs)        

    } catch (error) {
        console.log("[GET ALL ERROR]" , error);
        return new NextResponse("Internal Error" , {status : 500})
        
    }
}
