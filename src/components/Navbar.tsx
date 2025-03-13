import { CgGirl } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
function Navbar(){

    return(
        <nav className="fixed top-0 z-[999] w-full p-4 bg-[rgba(11,10,20,0.8)] backdrop-blur-lg">
            <div className="w-full flex items-center justify-evenly">
                <div className="text-white flex justify-center items-center gap-2">
                    <CgGirl color="white" size={30} />
                    <p className="text-xl font-bold">Hannah</p>
                </div>
                <div className="text-white flex justify-center items-center gap-2">
                    <FaProjectDiagram color="white" size={30} />
                    <p className="text-xl font-bold">Projects</p>
                </div>
                <div className="text-white flex justify-center items-center gap-2">
                    <FaUserGear color="white" size={30} />
                    <p className="text-xl font-bold">Skills</p>
                </div>
                <div className="text-white flex justify-center items-center gap-2">
                    <IoIosMail color="white" size={30} />
                    <p className="text-xl font-bold">Contact</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;