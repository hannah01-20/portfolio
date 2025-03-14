import hannah from "../assets/hannah.jpg"
import resume from "../pdfs/Hannah_Florano-CV.pdf"
function Header(){

    return (
        <header className="h-dvh overflow-hidden" id="home">
            <div className="w-full h-full bg-gradient-to-b from-white/0 to-black/80 ">
                <div className="grid grid-cols-2 p-20 justify-center items-center h-full">
                    <div className="h-full flex justify-center items-center">
                        <div className="grid gap-10">
                            <div className="p-8 rounded-md bg-[rgba(11,10,20,0.3)]  text-white w-2/3 grid gap-2 backdrop-blur-lg border border-black">
                                <h1 className="text-3xl font-bold">Hello! I'm Hannah,</h1>
                                <h2 className="text-2xl">Web and Software Developer</h2>
                                <p className="text-md">Passionate driven and eager to showcase my skills and bring ideas to life.</p>
                            </div>
                            <a href={resume} download="hannah_florano_resume" target="_blank"><button className="bg-pink-200/15 backdrop-blur-sm border border-pink-200 text-white py-4 px-8 rounded-md font-bold">Download Resume</button></a>
                        </div>
                    </div>
                    <div className="h-full flex justify-center items-center">
                        <img src={hannah} alt="hannah's picture" className="w-80 rounded-2xl shadow shadow-white" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;