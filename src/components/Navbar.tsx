"use client"

import { useRouter } from 'next/navigation';
import { useAuth, UserButton } from '@clerk/nextjs'
import Link from 'next/link'

const Navbar = () => {

    const {isSignedIn} = useAuth()
    
    const router = useRouter()
    
    function loginHandler() {
        router.push("/sign-in")
    }

    function signupHandler() {
        router.push("/sign-up")
    }



    return (
        <div className="w-full border-b border-stone-300 flex flex-row items-center justify-between md:px-[6rem] px-3 py-1">
            
            <div className="flex flex-row justify-center items-center gap-x-2 md:gap-x-7">
                <Link href="/"><h2 className='font-extrabold text-[2.4rem]'>BB.</h2></Link>
                <Link href="/write" className='tracking-tighter text-[0.9rem] md:text-sm inline py-1 px-3  bg-black hover:bg-stone-700 rounded-md text-white cursor-pointer'>Write Blog</Link>
            </div>

            <div className="flex flex-row justify-center items-center gap-x-2">
                {
                    isSignedIn ? 
                    (  
                        <UserButton afterSignOutUrl='/' />
                    ) : 
                    (  
                        <div className='flex justify-center items-center gap-2'>
                            <button onClick={loginHandler} className='inline py-1 px-3  bg-black hover:bg-stone-700 rounded-md text-white cursor-pointer text-[0.9rem] md:text-sm '>Login</button>
                            <button onClick={signupHandler} className='inline py-1 px-2 bg-gray-100 border border-stone-300 hover:bg-black rounded-md text-black hover:text-white cursor-pointer text-[0.9rem] md:text-sm '>Sign Up</button>
                        </div>
                    ) 
                }
                
            </div>

        </div> 
    )
}

export default Navbar