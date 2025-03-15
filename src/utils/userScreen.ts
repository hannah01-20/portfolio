import { useEffect, useState } from "react"

export function useIsMobile(): boolean{
    const [ screen, setScreen ] = useState(window.innerWidth);

    useEffect(()=>{
        const mql = window.matchMedia("(max-width: 640px)");
        const handleResize = () => setScreen(window.innerWidth);

        setScreen(window.innerWidth);

        window.addEventListener("resize", handleResize);
        mql.addEventListener("change", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            mql.removeEventListener("change", handleResize);
        };
    },[]);
    
    return screen <= 640
}