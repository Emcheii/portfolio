function Skills(){
    const SkillCategories = [
        {
            title: "Languages",
            skills: ["JavaScipt", "TypeScript", "Python"] 
        },
        {
            title: "Frontend",
            skills: ["Vanilla", "HTML/CSS", "React", "Tailwind CSS", "Sass/Scss"] 
        },
        {
            title: "Backend",
            skills: ["Node.js", "Flask"] 
        },
        {
            title: "Database",
            skills: ["MySQL", "MariaDB"] 
        },
        {
            title: "Developer Tools",
            skills: ["Git", "VS Code", "Postman", "DBeaver"] 
        },
        {
            title: "DevOps/Cloud",
            skills: ["Docker"] 
        },
        {
            title: "Soft Skills",
            skills: ["Communication Skills", "Attention to Detail", "Adaptability", "Problem Solving", "Mapagmahal"] 
        }
    ]

    return(
        <section id="skills" className="max-w-4xl mx-auto px-8 py-16 text-slate-200 font-mono">

            <h2 className="text-3xl font-semibold tracking-wide mb-10">
                Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {SkillCategories.map((category) => (
                    <div key={category.title} className="border border-slate-800 rounded-xl p-6 bg-linear-to-b from-slate-900 to-black">

                    <h3 className="text-xl font-semibold text-sky-400 mb-4">
                        {category.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">    
                        {category.skills.map((skill) => (
                        <span key={skill} className="text-sm px-3 py-1 bor border-slate-700 rounded-2xl text-slate-300" >
                            {skill}
                        </span>

                        ))}
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
};

export default Skills;