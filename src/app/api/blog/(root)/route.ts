import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/model/Blog";
import { NextResponse } from "next/server";

export async function GET (req:Request) {

    try {
        await dbConnect()
        
        const blogs = await BlogModel.find()

        const response = NextResponse.json(blogs);
        response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate, proxy-revalidate");
        response.headers.set("Pragma", "no-cache");
        response.headers.set("Expires", "0");
    
    
        return response;   

    } catch (error) {
        console.log("[GET ALL ERROR]" , error);
        return new NextResponse("Internal Error" , {status : 500})
        
    }
}