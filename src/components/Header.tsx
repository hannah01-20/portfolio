import hannah from "../assets/grad-pic.jpg"
import resume from "../pdfs/hannah_florano_CV.pdf"
import { name, occupation, description } from "../data"
import { stringTitle } from "../utils/formatter"
function Header(){
    const developerName = stringTitle(name);
    const developerOccupation = stringTitle(occupation);
    return (
        <header className="h-dvh overflow-hidden mt-20 sm:mt-0" id="home">
            <div className="w-full h-full bg-gradient-to-b from-white/0 to-black/80 ">
                <div className=" flex flex-col-reverse lg:flex-row lg:p-20 justify-center items-center h-full sm:gap-8">
                    <div className="h-1/2 w-full md:w-auto lg:h-full flex flex-col items-center md:items-start md:justify-center gap-8 sm:gap-10">
                        <div className="p-4 sm:p-8 rounded-xl bg-blue-200/15  text-white w-2/3 grid gap-2 backdrop-blur-lg border border-blue-200 hover:bg-blue-200/50 transition ease-in duration-200 hover:translate-x-2 active:translate-x-2 active:bg-blue-200/50">
                            <h1 className="text-xl md:text-3xl font-bold text-rose-200"><u>Hello! I'm {developerName}</u>,</h1>
                            <h2 className="text-lg md:text-2xl">{developerOccupation}</h2>
                            <p className="text-sm md:text-md">{description}</p>
                        </div>
                        <a href={resume} download="hannah_florano_resume" target="_blank"><button className="bg-pink-200/15 backdrop-blur-sm border border-pink-200 text-white text-sm md:text-xl py-2 md:py-4 px-8 rounded-md font-bold transition ease-in duration-200 hover:bg-pink-200/50 hover:translate-x-2 active:bg-pink-200/50 active:translate-x-2 cursor-pointer">Download Resume</button></a>
                    </div>
                    <div className="pb-12 md:pb-0">
                        <img src={hannah} alt="hannah's picture" className="w-40 md:w-80  top-50 rounded-lg shadow shadow-white transition ease-in duration-200 hover:shadow-2xl hover:-translate-y-2 active:shadow-2xl active:-translate-y-2" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;