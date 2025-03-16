import FlipCard from "../ui/FlipCard";

function Skills(){
    return (
        <section className="min-h-full w-full text-white" id="skills">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/80 p-8">
                <h1 className="text-3xl font-bold ">Skills</h1>
                <div className="w-full h-full grid justify-center">
                    <div className=" h-full py-6 flex flex-col gap-8 lg:gap-12 justify-center items-center md:flex-row md:space-x-2 md:flex-wrap">
                        <FlipCard title="UI/UX Design" description="Prioritizing user experience while achieving feature requirements and modern looking design." />
                        <FlipCard title="Frontend Development" description="Building client-side interface, validating data before sending requests, managing routes, and user state." />
                        <FlipCard title="Backend Development" description="Handling requests, Cors configuration, REST API, handling database interaction, validation, and send responses." />
                        <FlipCard title="Database Management" description="Managing Relational Database, making queries, add constrains to maintain database structure." />
                    </div>     
                </div>
                <div className="w-full mt-10">
                    <h1 className="text-2xl font-bold text-center relative before:content-[''] before:bg-white before:rounded-full  before:w-1/4 before:h-1 before:absolute before:top-4 before:left-1/2 before:origin-left before:-scale-x-100 before:-translate-x-16
                     after:content-[''] after:bg-white after:rounded-full after:w-1/4 after:h-1 after:absolute after:top-4 after:left-1/2 after:translate-x-16">
                        Tools
                    </h1>
                    
                    <div className="h-full overflow-hidden relative">
                        <div className="w-5/6 mx-auto flex space-x-16 py-16 items-center">
                            <div className=" flex gap-10 animate-loop-scroll"> 
                                <i className="devicon-react-original-wordmark colored text-5xl sm:text-8xl"></i>              
                                <i className="devicon-django-plain-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-djangorest-line text-5xl sm:text-8xl"></i>
                                <i className="devicon-mysql-plain-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-javascript-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-typescript-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-tailwindcss-plain-wordmark colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-sass-original colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-python-plain-wordmark colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-cplusplus-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-vscode-plain-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-git-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-github-original-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-azuresqldatabase-plain text-5xl sm:text-8xl"></i>
                                <i className="devicon-postman-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-figma-plain text-5xl sm:text-8xl"></i>
                            </div>
                            <div className="animate-loop-scroll flex gap-10" arial-hidden="true"> 
                                <i className="devicon-react-original-wordmark colored text-5xl sm:text-8xl"></i>              
                                <i className="devicon-django-plain-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-djangorest-line text-5xl sm:text-8xl"></i>
                                <i className="devicon-mysql-plain-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-javascript-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-typescript-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-tailwindcss-plain-wordmark colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-sass-original colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-python-plain-wordmark colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-cplusplus-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-vscode-plain-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-git-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-github-original-wordmark text-5xl sm:text-8xl"></i>
                                <i className="devicon-azuresqldatabase-plain text-5xl sm:text-8xl"></i>
                                <i className="devicon-postman-plain colored text-5xl sm:text-8xl"></i>
                                <i className="devicon-figma-plain text-5xl sm:text-8xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;