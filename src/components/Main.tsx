import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

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