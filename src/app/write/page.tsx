import FormEditor from "@/components/FormEditor"

const Blog = () => {
  return (
    <div className="flex items-center justify-center absolute w-screen h-full">
        <div className="mt-[12rem] flex flex-col items-start justify-start h-screen w-11/12 p-7">
            <h1 className="font-bold italic text-[4rem] underline ml-[28vw]">Write your blog.</h1>
            <FormEditor />
        </div>
    </div>
  )
}

export default Blog