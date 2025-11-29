import FlipCard from "../ui/FlipCard";
import ScrollInfinite from "../ui/ScrollInfinite";
import { skills } from "../../data";

function Skills(){
    const skillFlipCards = skills.map((skill, index) => {
        return (
            <FlipCard key={index}
                title={skill.title}
                description={skill.description}
                />
        )
    })
    return (
        <section className="sm:h-dvh text-white" id="skills">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/80 p-8 sm:p-20">
                <h1 className="text-3xl font-bold ">Skills</h1>
                <div className="w-full h-2/3 grid justify-center">
                    <div className=" h-full py-6 flex flex-col gap-8 lg:gap-12 justify-center items-center md:flex-row md:space-x-2 md:flex-wrap">
                        {skillFlipCards}
                    </div>     
                </div>
                <div className="w-full mt-10 sm:mt-40 lg:mt-20">
                    <h1 className="text-2xl font-bold text-center relative before:content-[''] before:bg-white before:rounded-full  before:w-1/4 before:h-1 before:absolute before:top-4 before:left-1/2 before:origin-left before:-scale-x-100 before:-translate-x-16
                     after:content-[''] after:bg-white after:rounded-full after:w-1/4 after:h-1 after:absolute after:top-4 after:left-1/2 after:translate-x-16">
                        Tools
                    </h1>
                    <ScrollInfinite />
                </div>
            </div>
        </section>
    )
}

export default Skills;