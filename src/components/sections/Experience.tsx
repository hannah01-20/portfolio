function Experience(){
    return (
        <section className=" text-white" id="experience">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/50 p-8 md:p-20">
                <h1 className="text-3xl font-bold mb-5 sm:mb-10">Experience</h1>
                <div className="w-full h-full flex justify-evenly">  
                    <div className="w-full lg:w-3/6 bg-pink-200/15 border border-pink-200 rounded-2xl backdrop-blur-lg p-5 shadow-xl shadow-pink-200">
                        <div className="grid grid-cols-2 w-full items-center">
                            <h1 className="text-xs font-semibold sm:text-xl">Frontend Developer Intern</h1>
                            <div className="text-[0.5rem] text-right sm:text-[0.9rem]">
                                <p>October 2024 - November 2024</p>
                                <p>Ollopa Corporation</p>
                            </div>
                        </div>
                        <div>
                            <ul className="list-disc py-3 px-5 sm:p-4 text-xs grid gap-2 justify-center sm:text-2xl">
                                <li>Part of AI Department and frontend team</li>
                                <li>Report tasks progression</li>
                                <li>Responsive Web app optimization</li>
                                <li>Debbuging</li>
                                <li>Participate and contribute in meetings</li>
                            </ul>
                        </div>
                    </div>
                </div>    
            </div>
        </section>
    )
}
export default Experience;