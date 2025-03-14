import hannah from "../assets/hannah1x1.jpg"
import resume from "../pdfs/Hannah_Florano-CV.pdf"
function Header(){

    return (
        <header className="h-dvh overflow-hidden" id="home">
            <div className="w-full h-full bg-gradient-to-b from-white/0 to-black/80 ">
                <div className="grid grid-cols-2 p-20 justify-center items-center h-full">
                    <div className="h-full flex justify-center items-center">
                        <div className="grid gap-10 pl-36">
                            <div className="p-8 rounded-md bg-blue-200/15  text-white w-2/3 grid gap-2 backdrop-blur-lg border border-blue-200 hover:bg-blue-200/50 transition ease-in duration-300 hover:translate-x-2">
                                <h1 className="text-3xl font-bold text-rose-200">Hello! I'm Hannah,</h1>
                                <h2 className="text-2xl">Web and Software Developer</h2>
                                <p className="text-md">Passionate driven and eager to showcase my skills and bring ideas to life.</p>
                            </div>
                            <a href={resume} download="hannah_florano_resume" target="_blank"><button className="bg-pink-200/15 backdrop-blur-sm border border-pink-200 text-white py-4 px-8 rounded-md font-bold transition ease-in duration-300 hover:bg-pink-200/50 hover:translate-x-2">Download Resume</button></a>
                        </div>
                    </div>
                    <div className="h-full flex justify-center items-center">
                        <img src={hannah} alt="hannah's picture" className="w-80 rounded-2xl shadow shadow-white transition ease-in duration-300 hover:shadow-2xl hover:-translate-y-2" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;