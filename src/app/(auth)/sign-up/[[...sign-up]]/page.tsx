import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="w-full h-full bg-white absolute z-[9999] top-0 flex justify-center items-center">
            <SignUp />
        </div>
    )
}