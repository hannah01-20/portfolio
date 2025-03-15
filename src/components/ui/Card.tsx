interface CardProps {
    projectTitle: string;
    about: string;
    features: string[];
    stack: string;
}

function Card({projectTitle, about, features, stack}: CardProps){
    return(
        <div className="p-8 rounded-lg bg-blue-200/15  text-white  backdrop-blur-lg md:w-3/5 lg:1/5 md:h-card border border-blue-200 grid gap-4 hover:bg-pink-200/15 hover:border-pink-200 active:bg-pink-200/15 active:border-pink-200 transition ease-in duration-200 hover:shadow-2xl active:shadow-2xl shadow-pink-200 hover:-translate-y-2 overflow-scroll cardScroll">
            <h1 className="font-bold text-center">{projectTitle}</h1>
            <li>{about}</li>
            {features.map((feature, i)=>(<li key={i}>{feature}</li>))}
            <li>{stack}</li>
        </div>
    )
}

export default Card;