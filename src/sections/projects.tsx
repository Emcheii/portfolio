interface Project {
    name: string;
    description: string;
    role: string;
    details: string;
    techStack: string[];
    image: string;
    github?: string;
    demo?: string;
}

function Projects(){
    const projects: Project[] = [
        {
            name: "Project i-DALAN",
            description: "Intelligent course recommendation system for incoming first-year students.",
            role: "Full-stack developer and thesis document contributor",
            details: "Built the application across the frontend and backend while contributing to the system design, implementation, testing, and thesis documentation.",
            techStack: ["Django", "Python", "Google Colab", "MySQL", "HTML/CSS"],
            image: `${import.meta.env.BASE_URL}projects/idalan-default.svg`,
            github: "https://github.com/yourusername/idalan",
            demo: ""
        },
        {
            name: "TO-DO List",
            description: "Full-stack task management application with dated tasks stored in a database.",
            role: "Full-stack developer",
            details: "Implemented the user interface, Flask backend, database integration, and task management workflow.",
            techStack: ["Flask", "Python", "MySQL", "HTML", "SCSS"],
            image: `${import.meta.env.BASE_URL}projects/todo-list-default.svg`,
            github: "https://github.com/Emcheii/to-do_list",
            demo: ""
        },
        {
            name: "Blog App",
            description: "Role-based blogging platform with separate administration and reader experiences.",
            role: "Full-stack developer",
            details: "Built admin access for full content management and user access for viewing published posts using Docker, DBeaver, HTML, CSS, and Flask.",
            techStack: ["Flask", "Docker", "DBeaver", "HTML", "CSS"],
            image: `${import.meta.env.BASE_URL}projects/blog-app-default.svg`,
            github: "",
            demo: ""
        }
    ]

    return (
        <section id="projects" className="max-w-4xl mx-auto px-8 py-16 text-slate-800 dark:text-slate-200 font-sans">
            <h2 className="text-3xl font-semibold tracking-wide mb-10">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="border border-slate-200 dark:border-blue-800/60 rounded-xl overflow-hidden bg-white dark:bg-linear-to-br dark:from-blue-950/90 dark:via-slate-900/90 dark:to-slate-950 shadow-sm dark:shadow-lg dark:shadow-blue-950/30"
                    >
                        <img
                            src={project.image}
                            alt={`${project.name} default project image`}
                            className="w-full h-48 object-cover border-b border-slate-200 dark:border-blue-800/60"
                        />

                        <div className="p-6">
                            <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>

                            <div className="mb-4 rounded-lg border border-sky-200 bg-sky-50/70 p-3 dark:border-sky-800/60 dark:bg-sky-950/30">
                                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700 dark:text-sky-300">My contribution</p>
                                <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{project.role}</p>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{project.details}</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs px-3 py-1 border border-slate-300 dark:border-slate-700 rounded-full text-slate-700 dark:text-slate-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex gap-4 text-sm">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-sky-400 transition-colors"
                                    >
                                        GitHub →
                                    </a>
                                )}
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