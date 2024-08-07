import dbConnect from "@/lib/dbConnect";
import BlogModel from "@/model/Blog";
import { NextResponse } from "next/server";

export async function POST (req:Request) {

    try {
        await dbConnect()
        
        const blogs = await BlogModel.find()

        const headers = new Headers();
        headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        headers.set('Pragma', 'no-cache');
        headers.set('Expires', '0');
        headers.set('Surrogate-Control', 'no-store');


        return NextResponse.json(blogs , {headers});

    } catch (error) {
        console.log("[GET ALL ERROR]" , error);
        return new NextResponse("Internal Error" , {status : 500})
        
    }
}

