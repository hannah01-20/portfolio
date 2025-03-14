import { CgGirl } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import NavItem from "./NavItem";


function Navbar(){

    return(
        <nav className="fixed top-0 z-[999] w-full backdrop-blur-lg shadow-sm">
            <div className="w-full flex items-center justify-evenly">
                <NavItem link="#home" Logo={CgGirl} text="Hannah"/>
                <NavItem link="#projects" Logo={FaProjectDiagram} text="Projects"/>
                <NavItem link="#skills" Logo={FaUserGear} text="Skills"/>
                <NavItem link="#contact" Logo={IoIosMail} text="Contact"/>
            </div>
        </nav>
    )
}

export default Navbar;