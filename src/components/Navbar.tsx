import Link from 'next/link'
import React from 'react'
import Avatar from './ui/Avatar'
import { Search } from 'lucide-react'

const Navbar = () => {
    return (
        <div className="sticky z-[6] top-5 left-1/2 transform -translate-x-1/2 w-[40vw] h-[4vw] rounded-lg bg-stone-200 border border-stone-300 flex items-center justify-between px-6">
            
            <div className="flex flex-row justify-center items-center gap-x-7">
                <Link href="#"><h2 className='font-extrabold text-[2.4rem]'>BB.</h2></Link>
                <Link href="#" className='underline'>Blog your Story</Link>
            </div>

            <div className="flex flex-row justify-center items-center gap-x-2">
                
                <Avatar 
                    styles={"bg-black"}
                    icon={<Search />}
                />

                <Avatar 
                    styles={"bg-orange-600"}
                    profile="A"
                />
                
            </div>

        </div>
    )
}

export default Navbar