import React from "react";

interface Props {
    link: string;
    Logo: React.ComponentType<{ color: string; size: number}>;
    text: string;
}

function NavItem({link, Logo, text}: Props){
    return(
        <a href={link} className="p-2 md:py-4 md:px-8 hover:bg-pink-200/15 hover:shadow-2xl active:bg-pink-200/15 active:shadow-2xl shadow-pink-200 transition ease-in-out duration-200">
            <div className="text-xl text-white flex justify-center items-center gap-2">
                <Logo color="white" size={30} />
                <p className="font-bold">{text}</p>
            </div>
        </a>
    )
}

export default NavItem