import CardSection from "@/components/CardSection"


const HomePage = () => {
  return (
    <div className="relative h-screen w-full bg-white">

      <div className="flex items-center justify-center">
        <h1 className="font-bold italic text-[3rem] mt-[4rem] pt-[3rem] ">All Blogs{"->"}</h1>
      </div>

      <CardSection />

    </div>
      
  )
}

export default HomePage



{/* <div className="absolute bg-black flex flex-row gap-5">
<div className="rounded-full w-10 h-10 bg-red-200 text-black flex items-center justify-center" onClick={() => alert("left")}>{`>`}</div>
<div className="rounded-full w-10 h-10 bg-red-200 text-black flex items-center justify-center" onClick={}>{`<`}</div>
</div> */}