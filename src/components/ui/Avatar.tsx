import { profile } from "console"

interface AvatarProps {
    src?:string
    background:string
    icon?:string | JSX.Element 
    profile?:string
}

const Avatar : React.FC<AvatarProps>= ({src , background ,icon , profile}) => {
    return (
        <div className={`rounded-full w-10 h-10 ${background} text-white flex items-center justify-center`}>
        
            {icon && (
                <div className=" flex items-center justify-center w-5 h-5 rotate-90">
                    {icon}
                </div>
            )}

            {profile && (
                <p className="text-xl font-bold text-black flex items-center justify-center w-5 h-5">
                    {profile}
                </p>
            )}

        </div>
    )
}

export default Avatar