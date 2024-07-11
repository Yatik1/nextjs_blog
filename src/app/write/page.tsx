import FormEditor from "@/components/FormEditor"

const Blog = () => {
  return (
    <div className="flex items-center justify-center absolute w-screen h-full mt-[1.6rem]">
        <div className="flex flex-col items-start justify-start w-11/12 p-7">
            <h1 className="font-bold italic text-[4rem] underline ml-[28vw]">Write your blog.</h1>
            <FormEditor />
        </div>
    </div>
  )
}

export default Blog