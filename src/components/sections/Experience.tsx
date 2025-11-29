import ExperienceItem from "../ui/ExperienceItem";
import { experiences } from "../../data";

function Experience(){
    const experiencesLength = experiences.length;
    const isOdd = experiencesLength % 2 !== 0;
    const experienceItems = experiences.map((exp, index) => {
        return <ExperienceItem
            key={index}
            jobTitle={exp.jobTitle}
            startDate={exp.startDate}
            endDate={exp.endDate}
            companyName={exp.companyName}
            responsibilities={exp.responsibilities}
            lastItem={(index + 1 === experiencesLength) && isOdd}
            />
    })
    return (
        <section className=" text-white" id="experience">
            <div className="w-dvw h-full bg-gradient-to-b from-black/80 via-white/0 to-black/50 p-8 md:p-20">
                <h1 className="text-3xl font-bold mb-5 sm:mb-10">Experience</h1>
                <div className="h-full grid md:grid-cols-2 md:p-10 gap-10 justify-items-center">  
                    {experienceItems}
                </div>    
            </div>
        </section>
    )
}
export default Experience;