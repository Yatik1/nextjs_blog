import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="w-screen h-screen bg-white absolute z-[9999] flex justify-center items-center">
            <SignUp />
        </div>
    )
}