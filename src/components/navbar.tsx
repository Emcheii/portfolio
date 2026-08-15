import { useState, useEffect } from "react";
import { User, Code, Briefcase, Mail, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
    { label: "About", href: "#about", icon: User, id: "about" },
    { label: "Skills", href: "#skills", icon: Code, id: "skills" },
    { label: "Projects", href: "#projects", icon: Briefcase, id: "projects" },
    { label: "Contact", href: "#contact", icon: Mail, id: "contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { isDark, toggleTheme } = useTheme();
    const [activeSection, setActiveSection] = useState<string>(() => {
        const sectionFromHash = window.location.hash.slice(1);
        return navLinks.some((link) => link.id === sectionFromHash)
            ? sectionFromHash
            : "about";
    });

    const handleNavClick = (sectionId: string): void => {
        setActiveSection(sectionId);
        setIsOpen(false);
    };

    useEffect(() => {
        const updateActiveSection = () => {
            if (window.scrollY <= 10) {
                setActiveSection("about");
                return;
            }

            const contactSection = document.getElementById("contact");
            const isAtPageBottom =
                contactSection !== null &&
                window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight - 24;

            if (isAtPageBottom) {
                setActiveSection("contact");
                return;
            }

            const activationPoint = window.innerHeight * 0.35;
            let currentSection = navLinks[0].id;

            for (const link of navLinks) {
                const element = document.getElementById(link.id);
                if (element && element.getBoundingClientRect().top <= activationPoint) {
                    currentSection = link.id;
                }
            }

            setActiveSection(currentSection);
        };

        const initialUpdate = window.setTimeout(updateActiveSection, 0);
        window.addEventListener("scroll", updateActiveSection, { passive: true });
        window.addEventListener("resize", updateActiveSection);

        return () => {
            window.clearTimeout(initialUpdate);
            window.removeEventListener("scroll", updateActiveSection);
            window.removeEventListener("resize", updateActiveSection);
        };
    }, []);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-white/95 dark:bg-linear-to-r dark:from-blue-900 dark:via-indigo-950 dark:to-slate-950 border border-slate-200 dark:border-blue-800/70 rounded-full text-slate-900 dark:text-slate-200 font-sans z-50 shadow-lg shadow-slate-300/40 dark:shadow-blue-950/50">
            <div className="flex justify-between items-center px-8 py-4 md:px-8 md:py-4">
                {/* Brand Title */}
                <span className="text-md md:text-2xl font-semibold tracking-wide leading-none">
                    My Portfolio
                </span>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-6 text-base">
                    {navLinks.map((item) => {
                        const Icon = item.icon;
                        // Check whether this is the current active section
                        const isActive = activeSection === item.id;

                        return (
                            <li key={item.label}>
                                <a
                                    onClick={() => handleNavClick(item.id)}
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-1 border-2 text-md rounded-md transition-all duration-200 ${isActive
                                            ? "border-sky-400 text-sky-400" // Active state uses a border only, with no background color
                                            : "border-transparent text-black dark:text-slate-300 hover:border-sky-400 hover:text-sky-400"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        );
                    })}
                    {/* Desktop Theme Switcher */}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="p-1 rounded-md text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                            aria-label={
                                isDark ? "Switch to light mode" : "Switch to dark mode"
                            }
                        >
                            {isDark ? (
                                <Sun className="w-5 h-5" />
                            ) : (
                                <Moon className="w-5 h-5" />
                            )}
                        </button>
                    </li>
                </ul>

                {/* Mobile Action Controls */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-1 text-slate-600 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 cursor-pointer"
                        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    >
                        {isDark ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1 text-slate-600 dark:text-slate-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <ul className="md:hidden absolute top-[110%] right-0 w-48 bg-white dark:bg-linear-to-b dark:from-blue-950 dark:to-slate-950 border border-slate-200 dark:border-blue-800/70 rounded-2xl shadow-xl flex flex-col gap-2 p-4 text-base">
                    {navLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.label} className="w-full">
                                <a
                                    onClick={() => handleNavClick(item.id)}
                                    href={item.href}
                                    className={`flex items-center gap-3 px-3 py-2 border-2 text-md rounded-md hover:border-sky-400 hover:text-sky-400 transition-all ${activeSection === item.id
                                            ? "border-sky-400 text-sky-400"
                                            : "border-transparent text-black dark:text-slate-300"
                                        }`}
                                >
                                    <Icon className="w-4 h-4 text-sky-400" />
                                    <span>{item.label}</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}
        </nav>
    );
}
