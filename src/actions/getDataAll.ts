import { Blogs } from "@/types/types"
import axios from "axios"

export async function getAllBlogs() {
    try {
        const response = await axios.get<Blogs[]>("/api/")
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}