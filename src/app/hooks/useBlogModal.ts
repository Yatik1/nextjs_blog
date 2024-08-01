import { Blogs } from '@/types/types'
import axios from 'axios'
import {create} from 'zustand'

export const revalidate = 0

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
            const response = await axios.get<Blogs[]>('/api/')
            set({blogs : response.data})
        } catch (error) {
            console.log("Fetch error : ",error)
        } finally {
            set({loading : false})
        }
    }
}))
export default useBlog