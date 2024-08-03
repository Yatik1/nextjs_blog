import { Blogs } from '@/types/types'
import axios from 'axios'
import {create} from 'zustand'

export const revalidate = 0;

interface BlogsState {
    blogs : Blogs[]
    loading:boolean
    fetchBlogs: () => Promise<void>
}

const useBlog = create<BlogsState>((set) => ({
    blogs:[],
    loading : false,
    fetchBlogs : async () => {
        set({loading : true})
        try {
            const response = await axios.get<Blogs[]>(`/api/?timestamp=${Date.now()}`, {
                headers: {
                    'Cache-Control': 'no-store',
                    'X-Vercel-Cache': 'no-store',
                    'Pragma': 'no-cache',
                    'Expires': '0',
                },
            });
            set({blogs : response.data})
            console.log( "Response data : " , response.data)

        } catch (error) {
            console.log("Fetch error : ",error)
        } finally {
            set({loading : false})
        }
    }
}))
export default useBlog