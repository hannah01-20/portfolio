import { CgGirl } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


function Navbar(){

    return(
        <nav className="fixed top-0 z-[999] w-full p-4 bg-[rgba(11,10,20,0.3)] backdrop-blur-lg border-b">
            <div className="w-full flex items-center justify-evenly">
                <a href="#home">
                    <div className="text-white flex justify-center items-center gap-2">
                        <CgGirl color="white" size={30} />
                        <p className="text-xl font-bold">Hannah</p>
                    </div>
                </a>
                <a href="#projects">
                    <div className="text-white flex justify-center items-center gap-2">
                        <FaProjectDiagram color="white" size={30} />
                        <p className="text-xl font-bold">Projects</p>
                    </div>
                </a>
                <a href="#skills">
                    <div className="text-white flex justify-center items-center gap-2">
                        <FaUserGear color="white" size={30} />
                        <p className="text-xl font-bold">Skills</p>
                    </div>
                </a>
                <a href="#contact">
                    <div className="text-white flex justify-center items-center gap-2">
                        <IoIosMail color="white" size={30} />
                        <p className="text-xl font-bold">Contact</p>
                    </div>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;