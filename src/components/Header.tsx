import hannah from "../assets/hannah.jpg"
function Header(){

    return (
        <header className="h-dvh bg-[url(assets/Moon.svg)] bg-center bg-no-repeat bg-cover overflow-hidden" id="home">
            <div className="w-full h-full bg-gradient-to-b from-white/0 to-black/80 ">
                <div className="grid grid-cols-2 p-20 justify-center items-center gap-40 h-full">
                    <div className="h-full flex justify-center items-center">
                        <div className="p-8 rounded-md bg-[rgba(11,10,20,0.3)]  text-white w-2/3 grid gap-2 backdrop-blur-lg border border-black">
                            <h1 className="text-3xl font-bold">Hello! I'm Hannah,</h1>
                            <h2 className="text-2xl">Web and Software Developer</h2>
                            <p className="text-md">Passionate driven and eager to showcase my skills and bring ideas to life.</p>
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