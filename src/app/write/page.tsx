import FormEditor from "@/components/FormEditor"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"

const Blog = () => {

  const {userId} = auth()

  if(!userId) {
    redirect("/sign-in")
  } 

  return (
    <div className="flex items-center justify-center overflow-x-hidden">
        <div className="flex flex-col items-start justify-start md:w-11/12 md:p-7 p-[4rem] gap-10 md:gap-0">
            <h1 className="font-bold text-[2rem] md:text-[4rem] w-screen flex items-center justify-center">Write your blog</h1>
            <FormEditor userId={userId} />
        </div>
    </div>
  )
}

export default Blog