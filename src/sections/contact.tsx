import type { ComponentType } from "react";
// Import the Mail icon from lucide and brand icons from react-icons/si
import { Mail } from "lucide-react";
import { SiGithub, SiLinkerd, SiFacebook } from "react-icons/si";

interface SocialLink {
    name: string;
    url: string;
    icon: ComponentType<{ className?: string }>;
    hoverColor: string; // Custom brand color when the mouse hovers over it
}

export default function Contact() {
    const socialLinks: SocialLink[] = [
        {
            name: "GitHub",
            url: "https://github.com/Emcheii",
            icon: SiGithub,
            hoverColor: "hover:text-white hover:border-white",
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/marloujay.tabil.7", // Replace this with your actual Facebook profile link
            icon: SiFacebook,
            hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/marlou-jay-tabil-436791428/", // This is a good placeholder for future tech recruiters
            icon: SiLinkerd,
            hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]",
        },
    ];

    return (
        // Keep max-w-4xl mx-auto px-8 aligned with the Skills section
        <section id="contact" className="max-w-4xl mx-auto px-8 py-24 text-slate-800 dark:text-slate-200 font-sans text-center">
            <h2 className="text-3xl font-semibold tracking-wide mb-4">
                Let's build something
            </h2>

            <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-lg mx-auto">
                Open to opportunities, collaborations, or just a chat about tech.
            </p>

            {/* Upgraded email button with an icon and a smoother dynamic hover effect */}
            <div className="mb-14">
                <a
                    href="mailto:marloutabil799@gmail.com"
                    className="inline-flex items-center gap-3 px-6 py-3 border-2 border-sky-500 dark:border-sky-400 rounded-md text-sky-600 dark:text-sky-400 hover:bg-sky-500 dark:hover:bg-sky-400 hover:text-white dark:hover:text-black font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md shadow-sky-400/10"
                >
                    <Mail className="w-5 h-5" />
                    <span>marloutabil799@gmail.com</span>
                </a>
            </div>

            {/* Social Icons Navigation Array Section */}
            <div className="flex justify-center items-center gap-4">
                {socialLinks.map((link) => {
                    const IconComponent = link.icon;
                    return (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-blue-800/60 bg-white/70 dark:bg-blue-950/40 rounded-xl text-slate-600 dark:text-slate-400 transition-all duration-300 group ${link.hoverColor}`}
                            title={`Visit ${link.name}`}
                        >
                            <IconComponent className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                            <span className="text-sm font-medium hidden sm:inline">{link.name}</span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
}
