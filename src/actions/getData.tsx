import { Blogs } from "@/types/types";


const getData = async () => {
    const res = await fetch("http://localhost:3000/api/blog")
    return res.json()
}

export default getData
