function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="min-h-[50dvh]">
            <div className="w-full h-full bg-gradient-to-b from-black/50 to-black p-8 md:p-20">
                <div className="w-full h-full">
                    <hr className="bg-white border-white rounded-full h-1" />
                    <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-4 text-white mt-10">
                        <div>
                            <h1 className="text-xl font-bold mb-3">Overview</h1>
                            <a href="#home"><li>CV File</li></a>
                            <a href="#projects"><li>Projects</li></a>
                            <a href="#skills"><li>Skills</li></a>
                            <a href="#skills"><li>Tools</li></a>
                            <a href="#experience"><li>Experience</li></a>
                        </div>
                        <div>
                            <h1 className="text-xl font-bold mb-3">Social Media</h1>
                            <a href="https://www.facebook.com/hannah.florano.3" target="_blank"><li>Facebook</li></a>
                            <a href="https://github.com/hannah01-20" target="_blank"><li>GitHub</li></a>
                            <a href="https://www.linkedin.com/in/hannah-grace-florano-161a5a311/" target="_blank"><li>linkedin</li></a>
                            
                        </div>
                        <div>
                            <h1 className="text-xl font-bold mb-3">Contact</h1>
                            <li>Email: hannahg.florano@gmail.com</li>
                        </div>
                    </div>

                    <p className="text-gray-400 text-center mt-20">© {currentYear} hannah01-20. All rights reserved.</p>
                </div>    
            </div>
        </footer>
    )
}

export default Footer;