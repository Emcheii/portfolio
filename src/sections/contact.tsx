import type { ComponentType } from "react";
// Import ang Mail icon mula sa lucide at brand icons mula sa react-icons/si
import { Mail } from "lucide-react";
import { SiGithub, SiLinkerd, SiFacebook } from "react-icons/si";

interface SocialLink {
    name: string;
    url: string;
    icon: ComponentType<{ className?: string }>;
    hoverColor: string; // Custom brand color kapag itinapat ang mouse
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
            url: "https://www.facebook.com/marloujay.tabil.7", // Palitan mo na lang ng aktwal mong FB link profile link
            icon: SiFacebook,
            hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]",
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/marlou-jay-tabil-436791428/", // Maganda itong placeholder para sa mga tech recruiters sa hinaharap
            icon: SiLinkerd,
            hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]",
        },
    ];

    return (
        // Nanatiling max-w-4xl mx-auto px-8 para lapat na lapat sa Skills section mo
        <section id="contact" className="max-w-4xl mx-auto px-8 py-24 text-slate-200 font-mono text-center">
            <h2 className="text-3xl font-semibold tracking-wide mb-4">
                Let's build something
            </h2>

            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
                Open to opportunities, collaborations, or just a chat about tech.
            </p>

            {/* Upgraded Email Button na may Kasamang Icon at Mas Swabeng Hover Dynamic Effect */}
            <div className="mb-14">
                <a
                    href="mailto:marloutabil799@gmail.com"
                    className="inline-flex items-center gap-3 px-6 py-3 border-2 border-sky-400 rounded-md text-sky-400 hover:bg-sky-400 hover:text-black font-semibold transition-all duration-300 transform hover:-translate-y-1 shadow-md shadow-sky-400/10"
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
                            className={`flex items-center gap-2 px-4 py-2 border border-slate-800 bg-slate-950/40 rounded-xl text-slate-400 transition-all duration-300 group ${link.hoverColor}`}
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
