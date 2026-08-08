import type { ComponentType } from "react";
// Import standard structural or generic soft-skill icons
import { Heart, Sparkles, MessageSquare, ShieldCheck, HelpCircle } from "lucide-react";
// Import technical brand icons
import {
    SiJavascript, SiTypescript, SiPython, SiHtml5, SiReact,
    SiTailwindcss, SiSass, SiNodedotjs, SiFlask, SiMysql,
    SiMariadb, SiGit, SiPostman, SiDbeaver, SiDocker
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

interface SkillItem {
    name: string;
    icon: ComponentType<{ className?: string }>;
    color: string;
}

interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            title: "Languages",
            skills: [
                { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
                { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]" },
                { name: "Python", icon: SiPython, color: "group-hover:text-[#3776AB]" },
            ],
        },
        {
            title: "Frontend",
            skills: [
                { name: "HTML/CSS", icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
                { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
                { name: "Sass/SCSS", icon: SiSass, color: "group-hover:text-[#CC6699]" },
            ],
        },
        {
            title: "Backend",
            skills: [
                { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-[#5FA442]" },
                { name: "Flask", icon: SiFlask, color: "group-hover:text-white" },
            ],
        },
        {
            title: "Database",
            skills: [
                { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]" },
                { name: "MariaDB", icon: SiMariadb, color: "group-hover:text-[#003545]" },
            ],
        },
        {
            title: "Developer Tools",
            skills: [
                { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]" },
                { name: "VS Code", icon: VscCode, color: "group-hover:text-[#007ACC]" },
                { name: "Postman", icon: SiPostman, color: "group-hover:text-[#FF6C37]" },
                { name: "DBeaver", icon: SiDbeaver, color: "group-hover:text-[#382923]" },
            ],
        },
        {
            title: "DevOps/Cloud",
            skills: [
                { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]" },
            ],
        },
        {
            title: "Soft Skills",
            skills: [
                { name: "Communication", icon: MessageSquare, color: "group-hover:text-emerald-400" },
                { name: "Attention to Detail", icon: ShieldCheck, color: "group-hover:text-amber-400" },
                { name: "Adaptability", icon: Sparkles, color: "group-hover:text-purple-400" },
                { name: "Problem Solving", icon: HelpCircle, color: "group-hover:text-rose-400" },
                { name: "Mapagmahal", icon: Heart, color: "group-hover:text-red-500 animate-pulse" },
            ],
        },
    ];

    return (
        // Restored exact max-w-4xl grid constraints and font tracking elements
        <section id="skills" className="max-w-4xl mx-auto px-8 py-16 text-slate-200 font-mono">
            <h2 className="text-3xl font-semibold tracking-wide mb-10">
                Skills
            </h2>

            {/* Restored exact grid layout system definitions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className="border border-slate-800 rounded-xl p-6 bg-linear-to-b from-slate-900 to-black"
                    >
                        <h3 className="text-xl font-semibold text-sky-400 mb-4">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div
                                        key={skill.name}
                                        className="group flex items-center gap-2 text-sm px-3 py-1 border border-slate-700 rounded-2xl text-slate-300 transition-all duration-300 cursor-default select-none"
                                    >
                                        <Icon className={`w-4 h-4 text-slate-400 transition-all duration-300 transform group-hover:scale-110 ${skill.color}`} />
                                        <span className="group-hover:text-slate-100 transition-colors duration-200">
                                            {skill.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}