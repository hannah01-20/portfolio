import Card from "../ui/Card";
import { projects } from "../../data";
function Projects(){
    const cards = projects.map((project, index) => {
        return (
            <Card key={index}
                projectTitle={project.projectTitle}
                about={project.about}
                link={project.link}
                link_text={project.link_text}
                features={project.features}
                stack={project.stack}
                />
        )
    })
    return (
        <section className="md:min-h-dvh text-white" id="projects">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/80 p-8 md:p-20">
                <h1 className="text-3xl font-bold mt-8">Projects</h1>
                <div className="w-full h-full grid gap-6 sm:grid-cols-3 justify-evenly items-center mt-8">
                    {cards}
                </div>    
            </div>
        </section>
    )
}

export default Projects;