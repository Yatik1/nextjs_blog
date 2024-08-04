import getData from "@/actions/getData";
import CardSection from "@/components/CardSection"
import MobileCardSection from "@/components/MobileCardSection"

export const revalidate=0;

const HomePage = async () => {

  const data = await getData()

  if (data?.length === 0) {
    return <p className='mt-[10rem] flex justify-center items-start text-slate-500'>No Blogs Available. ❌</p>
  }

  return (
    <div className="md:overflow-x-hidden ">

      <div className="flex items-center justify-center">
        <h1 className="font-bold italic text-[3rem] pt-[1.2rem]">All Blogs {`->`}</h1>
      </div>

      <CardSection blogs = {data} />
      <MobileCardSection blogs={data} />

    </div>
      
  )
}

export default HomePage
