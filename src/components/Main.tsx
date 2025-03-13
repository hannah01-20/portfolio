import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";

function Main(){
    return(
        <main className="min-h-dvh">
            <Projects />
            <Skills />
            <Contact />
        </main>
    )
}

export default Main;