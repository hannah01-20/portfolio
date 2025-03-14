import Card from "../ui/Card";
function Projects(){
    return (
        <section className="h-dvh bg-[url(assets/bg3.svg)] bg-no-repeat bg-center bg-cover text-white" id="projects">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/80 p-20">
                <h1 className="text-3xl font-bold">Projects</h1>
                <div className="w-full h-full flex justify-evenly items-center">
                    <Card />
                    <Card />
                    <Card />
                </div>    
            </div>
        </section>
    )
}

export default Projects;