function Projects(){
    const projects = [
        {
            name: "Project i-DALAN",
            description:"Intelligent course recommendation system for incoming first-year students",
            techStack: ["Django", "Python", "Google Colab", "MySQL", "HTML/CSS"],
            image:"/projects/idalan.png",
            github: "https://github.com/yourusername/idalan",
            demo: ""
        },
        {
            name: "TO-DO List",
            description:"Upgraded task list that have date and store it on database",
            techStack: ["Flask", "Python", "MySQL", "HTML/Scss"],
            image:"/projects/todo-list.png",
            github: "https://github.com/Emcheii/to-do_list",
            demo: ""
        }
    ]

    return (
        <section id="projects" className="max-w-4xl mx-auto px-8 py-16 text-slate-200 font-mono">
            <h2 className="text-3xl font-semibold tracking-wide mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="border border-slate-800 rounded-xl overflow-hidden bg-linear-to-b from-slate-900 to-black"
                    >
                        <img
                            src={project.image}
                            alt={project.name}
                            className="w-full h-48 object-cover border-b border-slate-800"
                        />

                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                            <p className="text-sm text-slate-400 mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-3 py-1 border border-slate-700 rounded-full text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-sky-400 transition-colors"
                                >
                                    GitHub →
                                </a>
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-sky-400 transition-colors"
                                    >
                                        Live Demo →
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default Projects;