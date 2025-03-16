import { useState } from "react";

interface FlipCardProps {
    title: string;
    description: string;
}

function FlipCard({ title, description }: FlipCardProps){
    const [ isFlipped, setIsFlipped ] = useState(false);
    const handleFlip = () => setIsFlipped(e => !e)
    return (
        <div className={`card-container w-[225px] h-[225px] cursor-pointer`}>
            <div className={`card relative h-full w-full  transform-3d transition duration-500 ease-in-out lg:hover:rotate-y-180 ${isFlipped && "rotate-y-180"}`} 
                onClick={handleFlip}>
                <div className="card-front absolute h-full w-full backface-hidden bg-blue-200/15 backdrop-blur-lg border border-blue-200 rounded-lg shadow-xl shadow-blue-200 p-3 flex justify-center items-center">
                    <h1 className="text-xl font-bold text-center">{title}</h1>
                </div>
                <div className="card-back absolute h-full w-full backface-hidden rotate-y-180 bg-pink-200/15 backdrop-blur-lg border border-pink-200 rounded-lg shadow-xl shadow-pink-200 flex items-center">
                    <p className="p-3 text-center">{description}</p>
                </div>
            </div>
        </div>
    )
}

export default FlipCard;