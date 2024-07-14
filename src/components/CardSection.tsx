
import Card from './ui/Card'
import { Blogs } from '@/types/types'
import {motion} from "framer-motion"



const CardSection = ({blogs} : {blogs : Blogs[]}) => {

    return (
        <div className="absolute flex items-start pl-7 pb-[3rem]">
            <motion.div 
                initial={{ x: 0 }}
                animate={{ x: "-50%" }}
                transition={{ repeat: Infinity, ease: "linear", duration:30, delay:0.5 }}
                className="gap-[1.5rem] items-start hidden md:flex"
            >
                {blogs.map((data,index) => (
                    <Card 
                        id={data._id}
                        title={data.title}
                        cover={data.coverImg}
                        index={index}
                    />  
                ))}
                {blogs.map((data,index) => (
                    <Card 
                        id={data._id}
                        title={data.title}
                        cover={data.coverImg}
                        index={index}
                    />  
                ))}
            </motion.div>   
        </div>
    )
}

export default CardSection