import Card from './ui/Card'
import { Blogs } from '@/types/types'
import {motion} from "framer-motion"

export const revalidate = 0;

const CardSection = ({blogs} : {blogs : Blogs[] | undefined}) => {

    const length = blogs?.length

    return (
        <div className="flex items-start pl-7 pb-[3rem]">
            {(length !== undefined && length > 3)  ? (
                <motion.div 
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration:30, delay:0.5 }}
                className="gap-[1.5rem] items-start hidden md:flex"
            >
                {blogs?.map((data,index) => (
                    <Card 
                        key={index}
                        id={data._id}
                        title={data.title}
                        cover={data.coverImg}
                        index={index}
                    />  
                ))}
                {blogs?.map((data,index) => (
                    <Card 
                        key={index}
                        id={data._id}
                        title={data.title}
                        cover={data.coverImg}
                        index={index}
                    />  
                ))}
            </motion.div> 
            ) : (
                <div className='gap-[1.3rem] items-start hidden md:flex'>
                {blogs?.map((data,index) => (
                    <Card 
                        key={index}
                        id={data._id}
                        title={data.title}
                        cover={data.coverImg}
                        index={index}
                    />  
                ))}
                </div>
            ) }
        </div>
    )
}

export default CardSection