import mongoose, { Schema } from "mongoose"

export interface Blogs extends Document{
    authorId?:string
    title:string
    content:string
    coverImg:string
    createdAt:Date
}

const BlogSchema : Schema<Blogs> = new Schema ({
    authorId : {
        type:String,
        required: true
    },
    title:{
        type:String,
        required:true
    } ,
    content:{
        type:String,
        required:true
    },
    coverImg: {
        type:String,
        required:true,
    },
    createdAt : {
        type:Date,
        required:true,
        default:Date.now()
    }
})

const BlogModel = (mongoose.models.Blogs as mongoose.Model<Blogs> || mongoose.model<Blogs>("Blogs", BlogSchema))

export default BlogModel