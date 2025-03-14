import Card from "../ui/Card";
function Projects(){
    return (
        <section className="h-dvh text-white" id="projects">
            <div className="w-full h-full bg-gradient-to-b from-black/80 via-white/0 to-black/80 p-20">
                <h1 className="text-3xl font-bold">Projects</h1>
                <div className="w-full h-full flex justify-evenly items-center">
                    <Card 
                        projectTitle="Monitoring Expenses web-based"
                        about="Monitoring and tracking user's expenses, accurately presenting user's transaction for him/her to analyzed it."
                        features={[
                            "User Athentication",
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
                    about="Online voting system dedicated for AMACC Fairview Sudent Council Election and help students to vote more efficiently and accessibily." 
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