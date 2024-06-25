import Card from './ui/Card'

const CardSection = () => {
    return (
        <div className="absolute top-[14%] h-full w-auto flex items-start pl-7">
            {[1,2,3,4,5,6].map((item,index) => (
                <Card 
                    title="Welcome to the blog"
                    cover="https://images.unsplash.com/photo-1719257726822-9899127bb072?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    author="Yatik"
                    index={index}
                />  
            ))}          
        </div>
    )
}

export default CardSection

      
// <div className="mt-9 pl-[4rem] py-[4rem] flex flex-row gap-x-10 bg-red-400 w-full">
// <Card />
// </div>

// <Card 
//             title="Welcome to the blog"
//             cover="https://images.unsplash.com/photo-1719257726822-9899127bb072?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="Yatik"
//         />
//         <Card 
//             title="Welcome to the blog"
//             cover="https://images.unsplash.com/photo-1719257726822-9899127bb072?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="Yatik"
//         />
        
//         <Card 
//             title="Welcome to the blog"
//             cover="https://images.unsplash.com/photo-1719257726822-9899127bb072?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="Yatik"
//         />
//         <Card 
//             title="Welcome to the blog"
//             cover="https://images.unsplash.com/photo-1719257726822-9899127bb072?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="Yatik"
//         />
//         <Card 
//             title="Welcome to the blog"
//             cover="https://images.unsplash.com/photo-1719257726822-9899127bb072?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="Yatik"
//         />
//         <Card 
//             title="Welcome to the blog"
//             cover="https://images.unsplash.com/photo-1719257726822-9899127bb072?q=80&w=1410&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             author="Yatik"
//         />