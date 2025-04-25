import Card from "../ui/Card";
function Projects(){
    return (
        <section className="md:min-h-dvh text-white" id="projects">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/80 p-8 md:p-20">
                <h1 className="text-3xl font-bold mt-8">Projects</h1>
                <div className="w-full h-full grid gap-6 sm:grid-cols-3 md:grid-cols-4 justify-evenly items-center mt-8">
                    <Card 
                        projectTitle="CRUD Operations with RestAPI web-based"
                        about="Allow users to create, read, update, and delete data, showcasing the power of RESTful APIs. This project is a job requirement for a company."
                        link="https://hannah01-20.github.io/restapi-items/"
                        link_text="https://hannah01-20.github.io/restapi-items/"
                        features={[
                            "JWT Authentication",
                            "CRUD operations",
                            "Simple responsive UI design",
                        ]}
                        stack="React, TypeScript, Flask, Azure MySQL, GitHub pages, Vercel"/>
                    <Card 
                        projectTitle="Personal E-portfolio"
                        about="A personal portfolio website that showcases my skills, projects, and experiences."
                        link="https://hannahflorano.me/"
                        link_text="https://hannahflorano.me/"
                        features={[
                            "Responsive design",
                            "Projects",
                            "Tools",
                            "Skills",
                            "Experience",
                        ]}
                        stack="React, TypeScript, GitHub pages"/>
                    <Card 
                        projectTitle="Monitoring Expenses web-based"
                        about="Monitoring and tracking user's expenses, accurately presenting user's transaction for him/her to analyzed it."
                        features={[
                            "User Authentication",
                            "Transaction logs",
                            "Graphical representation of expenses",
                            "Allocate budgets",
                            "Push notifications",
                            "Tracking outflow and inflow of money",
                            "Creating budget plans automation based on user preference",
                            "Taking picture user's receipt and automatically log it"
                        ]}
                        stack="React, Djano, Azure MySQL, Azure hosting"/>
                    
                    <Card 
                    projectTitle="Student Council Online Voting System"
                    about="Online voting system dedicated for AMACC Fairview Student Council Election and help students to vote more efficiently and accessibily." 
                    features={[
                        "User Authentication",
                        "Ballot form",
                        "Submit ballot",
                        "Presentation of Candidate Profile",
                        "Vote counts accurately",
                        "Presentation of the final outcome of the election",
                        "Post Student Council activities"
                    ]}
                    stack="React, Django, Azure MySQL, Azure hosting"/>
                    <Card 
                    projectTitle="Calculator app for desktop"
                    about="Simple calculator app that can do basic operations"
                    features={[
                        "Numpad on screen or use keyboard for input",
                        "Display the outcome of mathematical expression",
                        "Operations: Addition, Substraction, Multiplication, and Division"
                    ]}
                    stack="Python, PySide6 (GUI framework)"/>
                    
                </div>    
            </div>
        </section>
    )
}

export default Projects;