import hannah from "../assets/hannah1x1.jpg"
import resume from "../pdfs/hannah_florano_CV.pdf"
function Header(){

    return (
        <header className="h-dvh overflow-hidden" id="home">
            <div className="w-full h-full bg-gradient-to-b from-white/0 to-black/80 ">
                <div className=" flex flex-col-reverse lg:flex-row lg:p-20 justify-center items-center h-full">
                    <div className="h-1/2 w-full md:w-auto lg:h-full flex flex-col items-center md:items-start md:justify-center gap-5 sm:gap-10">
                        <div className="p-8 rounded-md bg-blue-200/15  text-white w-2/3 grid gap-2 backdrop-blur-lg border border-blue-200 hover:bg-blue-200/50 transition ease-in duration-200 hover:translate-x-2 active:translate-x-2 active:bg-blue-200/50">
                            <h1 className="text-xl md:text-3xl font-bold text-rose-200"><u>Hello! I'm Hannah</u>,</h1>
                            <h2 className="text-lg md:text-2xl">Web and Software Developer</h2>
                            <p className="text-sm md:text-md">Passionate driven and eager to showcase my skills and bring ideas to life.</p>
                        </div>
                        <a href={resume} download="hannah_florano_resume" target="_blank"><button className="bg-pink-200/15 backdrop-blur-sm border border-pink-200 text-white py-4 px-8 rounded-md font-bold transition ease-in duration-200 hover:bg-pink-200/50 hover:translate-x-2 active:bg-pink-200/50 active:translate-x-2 cursor-pointer">Download Resume</button></a>
                    </div>
                    <div className="h-1/2 lg:h-full flex justify-center items-center">
                        <img src={hannah} alt="hannah's picture" className="w-50 md:w-80 rounded-2xl shadow shadow-white transition ease-in duration-200 hover:shadow-2xl hover:-translate-y-2 active:shadow-2xl active:-translate-y-2" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;