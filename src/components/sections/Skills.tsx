import FlipCard from "../ui/FlipCard";

function Skills(){
    return (
        <section className="min-h-dvh lg:h-dvh text-white" id="skills">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/80 p-8 md:p-20">
                <h1 className="text-3xl font-bold ">Skills</h1>
                <div className="w-full flex justify-center">
                    <div className="w-4/5 h-full py-6 flex flex-col gap-8 lg:gap-12 justify-center items-center md:flex-row md:space-x-2 md:flex-wrap">
                        <FlipCard title="UI/UX Design" description="Prioritizing user experience while achieving feature requirements and modern looking design." />
                        <FlipCard title="Frontend Development" description="Building client-side interface, validating data before sending requests, managing routes, and user state." />
                        <FlipCard title="Backend Development" description="Handling requests, Cors configuration, REST API, handling database interaction, validation, and send responses." />
                        <FlipCard title="Database Management" description="Managing Relational Database, making queries, add constrains to maintain database structure." />
                    </div> 
                </div>  
            </div>
        </section>
    )
}

export default Skills;