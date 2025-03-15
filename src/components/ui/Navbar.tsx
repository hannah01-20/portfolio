import { CgGirl } from "react-icons/cg";
import { FaProjectDiagram } from "react-icons/fa";
import { FaUserGear } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import NavItem from "./NavItem";
import { isMobile } from "../../utils/userScreen";
import { useState } from "react";


function Navbar(){
    const [ isOpen, setOpen ] = useState(false);
    const handleDropDown = () => {
        setOpen(e=>!e);
    }
    return(
        <nav className={`fixed top-0 z-[999] w-full backdrop-blur-lg shadow-sm overflow-hidden transition ease-in duration-300 ${isOpen && "h-full" }`} >
            {isMobile() ? (
                <>
                    <div className="w-full flex items-center justify-between px-5">
                    <NavItem link="#home" Logo={CgGirl} text="Hannah" />
                    {!isOpen ? <MdMenu color="white" size={30} onClick={handleDropDown} />
                        :
                    <IoIosClose color="white" size={40} onClick={handleDropDown} />}
                    </div>
                    
                    {isOpen &&
                        <div className="w-full h-full p-36 grid" onClick={handleDropDown}>
                            <NavItem link="#projects" Logo={FaProjectDiagram} text="Projects"/>
                            <NavItem link="#skills" Logo={FaUserGear} text="Skills"/>
                            <NavItem link="#contact" Logo={IoIosMail} text="Contact"/>
                        </div>
                    }
                    
                </>
            ):(
                <div className="w-full flex items-center justify-evenly">
                    <NavItem link="#home" Logo={CgGirl} text="Hannah"/>
                    <NavItem link="#projects" Logo={FaProjectDiagram} text="Projects"/>
                    <NavItem link="#skills" Logo={FaUserGear} text="Skills"/>
                    <NavItem link="#contact" Logo={IoIosMail} text="Contact"/>
                </div>
            )}
        </nav>
    )
}

export default Navbar;