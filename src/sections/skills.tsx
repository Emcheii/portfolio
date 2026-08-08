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
    badgeColor: string;
}

interface SkillCategory {
    title: string;
    skills: SkillItem[];
    accent: {
        border: string;
        title: string;
        glow: string;
    };
}

export default function Skills() {
    const skillCategories: SkillCategory[] = [
        {
            title: "Languages",
            accent: {
                border: "border-violet-200 dark:border-violet-800/70",
                title: "text-violet-700 dark:text-violet-300",
                glow: "from-violet-50 dark:from-violet-950/40",
            },
            skills: [
                { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]", badgeColor: "border-yellow-300 bg-yellow-50 text-yellow-800 dark:border-yellow-700/70 dark:bg-yellow-950/40 dark:text-yellow-300" },
                { name: "TypeScript", icon: SiTypescript, color: "group-hover:text-[#3178C6]", badgeColor: "border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-300" },
                { name: "Python", icon: SiPython, color: "group-hover:text-[#3776AB]", badgeColor: "border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-300" },
            ],
        },
        {
            title: "Frontend",
            accent: {
                border: "border-cyan-200 dark:border-cyan-800/70",
                title: "text-cyan-700 dark:text-cyan-300",
                glow: "from-cyan-50 dark:from-cyan-950/40",
            },
            skills: [
                { name: "HTML/CSS", icon: SiHtml5, color: "group-hover:text-[#E34F26]", badgeColor: "border-orange-300 bg-orange-50 text-orange-800 dark:border-orange-700/70 dark:bg-orange-950/40 dark:text-orange-300" },
                { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]", badgeColor: "border-cyan-300 bg-cyan-50 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-300" },
                { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]", badgeColor: "border-teal-300 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-300" },
                { name: "Sass/SCSS", icon: SiSass, color: "group-hover:text-[#CC6699]", badgeColor: "border-pink-300 bg-pink-50 text-pink-800 dark:border-pink-700/70 dark:bg-pink-950/40 dark:text-pink-300" },
            ],
        },
        {
            title: "Backend",
            accent: {
                border: "border-emerald-200 dark:border-emerald-800/70",
                title: "text-emerald-700 dark:text-emerald-300",
                glow: "from-emerald-50 dark:from-emerald-950/40",
            },
            skills: [
                { name: "Node.js", icon: SiNodedotjs, color: "group-hover:text-[#5FA442]", badgeColor: "border-green-300 bg-green-50 text-green-800 dark:border-green-700/70 dark:bg-green-950/40 dark:text-green-300" },
                { name: "Flask", icon: SiFlask, color: "group-hover:text-white", badgeColor: "border-slate-300 bg-slate-100 text-slate-800 dark:border-slate-600 dark:bg-slate-800/70 dark:text-slate-200" },
            ],
        },
        {
            title: "Database",
            accent: {
                border: "border-amber-200 dark:border-amber-800/70",
                title: "text-amber-700 dark:text-amber-300",
                glow: "from-amber-50 dark:from-amber-950/40",
            },
            skills: [
                { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]", badgeColor: "border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-300" },
                { name: "MariaDB", icon: SiMariadb, color: "group-hover:text-[#003545]", badgeColor: "border-teal-300 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-300" },
            ],
        },
        {
            title: "Developer Tools",
            accent: {
                border: "border-orange-200 dark:border-orange-800/70",
                title: "text-orange-700 dark:text-orange-300",
                glow: "from-orange-50 dark:from-orange-950/40",
            },
            skills: [
                { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]", badgeColor: "border-orange-300 bg-orange-50 text-orange-800 dark:border-orange-700/70 dark:bg-orange-950/40 dark:text-orange-300" },
                { name: "VS Code", icon: VscCode, color: "group-hover:text-[#007ACC]", badgeColor: "border-sky-300 bg-sky-50 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-300" },
                { name: "Postman", icon: SiPostman, color: "group-hover:text-[#FF6C37]", badgeColor: "border-orange-300 bg-orange-50 text-orange-800 dark:border-orange-700/70 dark:bg-orange-950/40 dark:text-orange-300" },
                { name: "DBeaver", icon: SiDbeaver, color: "group-hover:text-[#382923]", badgeColor: "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-300" },
            ],
        },
        {
            title: "DevOps/Cloud",
            accent: {
                border: "border-blue-200 dark:border-blue-700/70",
                title: "text-blue-700 dark:text-blue-300",
                glow: "from-blue-50 dark:from-blue-950/40",
            },
            skills: [
                { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]", badgeColor: "border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-300" },
            ],
        },
        {
            title: "Soft Skills",
            accent: {
                border: "border-rose-200 dark:border-rose-800/70",
                title: "text-rose-700 dark:text-rose-300",
                glow: "from-rose-50 dark:from-rose-950/40",
            },
            skills: [
                { name: "Communication", icon: MessageSquare, color: "group-hover:text-emerald-400", badgeColor: "border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-300" },
                { name: "Attention to Detail", icon: ShieldCheck, color: "group-hover:text-amber-400", badgeColor: "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-300" },
                { name: "Adaptability", icon: Sparkles, color: "group-hover:text-purple-400", badgeColor: "border-purple-300 bg-purple-50 text-purple-800 dark:border-purple-700/70 dark:bg-purple-950/40 dark:text-purple-300" },
                { name: "Problem Solving", icon: HelpCircle, color: "group-hover:text-rose-400", badgeColor: "border-rose-300 bg-rose-50 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-300" },
                { name: "Mapagmahal", icon: Heart, color: "group-hover:text-red-500 animate-pulse", badgeColor: "border-red-300 bg-red-50 text-red-800 dark:border-red-700/70 dark:bg-red-950/40 dark:text-red-300" },
            ],
        },
    ];

    return (
        // Restored exact max-w-4xl grid constraints and font tracking elements
        <section id="skills" className="max-w-4xl mx-auto px-8 py-16 text-slate-800 dark:text-slate-200 font-sans">
            <h2 className="text-3xl font-semibold tracking-wide mb-10">
                Skills
            </h2>

            {/* Restored exact grid layout system definitions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category) => (
                    <div
                        key={category.title}
                        className={`border ${category.accent.border} rounded-xl p-6 bg-linear-to-br ${category.accent.glow} via-white dark:via-slate-900/90 to-white dark:to-slate-950 shadow-sm dark:shadow-lg dark:shadow-blue-950/30 transition-transform duration-300 hover:-translate-y-1`}
                    >
                        <h3 className={`text-xl font-semibold ${category.accent.title} mb-4`}>
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill) => {
                                const Icon = skill.icon;
                                return (
                                    <div
                                        key={skill.name}
                                        className={`group flex items-center gap-2 text-sm px-3 py-1 border rounded-2xl transition-all duration-300 cursor-default select-none hover:-translate-y-0.5 hover:brightness-110 ${skill.badgeColor}`}
                                    >
                                        <Icon className={`w-4 h-4 transition-all duration-300 transform group-hover:scale-110 ${skill.color}`} />
                                        <span className="font-medium transition-colors duration-200">
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