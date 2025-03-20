function Experience(){
    return (
        <section className=" text-white" id="experience">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/50 p-8 md:p-20">
                <h1 className="text-3xl font-bold mb-10">Experience</h1>
                <div className="w-full h-full flex justify-evenly">  
                    <div className="w-full lg:w-4/5">
                        <div className="grid grid-cols-2 w-full items-center">
                            <h1 className="text-sm font-semibold sm:text-3xl">Frontend Developer Intern</h1>
                            <div className="text-xs text-right sm:text-xl">
                                <p>October 2024 - November 2024</p>
                                <p>Ollopa Corporation</p>
                            </div>
                        </div>
                        <div>
                            <ul className="list-disc p-4 text-xs grid gap-2 justify-center sm:text-2xl">
                                <li>Part of AI Department and frontend team</li>
                                <li>Part of AI Department and frontend team</li>
                                <li>Part of AI Department and frontend team</li>
                                <li>Part of AI Department and frontend team</li>
                                <li>Part of AI Department and frontend team</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}
export default Experience;