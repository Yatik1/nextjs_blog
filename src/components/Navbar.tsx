"use client"

import { useRouter } from 'next/navigation';
import { useAuth, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import Avatar from './ui/Avatar'


const Navbar = () => {

    const {isSignedIn} = useAuth()
    
    const router = useRouter()
    
    function authHandler() {
        router.push("/sign-in")
    }



    return (
        <div className="fixed z-[8] top-5 left-1/2 transform -translate-x-1/2 lg:w-[40vw] w-[80vw] rounded-lg bg-stone-200 border border-stone-300 flex items-center justify-between px-6">
            
            <div className="flex flex-row justify-center items-center gap-x-2 md:gap-x-7">
                <Link href="/"><h2 className='font-extrabold text-[2.4rem]'>BB.</h2></Link>
                <Link href="/write" className='underline tracking-tighter text-[0.75rem] md:text-sm'>Blog your Story</Link>
            </div>

            <div className="flex flex-row justify-center items-center gap-x-2">
                {
                    isSignedIn ? 
                    (  <UserButton afterSignOutUrl='/' />  ) : 
                    (  <Avatar styles={"bg-orange-600"} profile="A" onclick={authHandler} /> ) 
                }
                
            </div>

        </div> 
    )
}

export default Navbar