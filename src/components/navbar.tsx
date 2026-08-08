import { useState, useEffect } from "react";
import { User, Code, Briefcase, Mail, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(true);
    const [activeSection, setActiveSection] = useState<string>("about"); // Default active section

    const toggleTheme = (): void => {
        setIsDark(!isDark);
        document.documentElement.classList.toggle("dark");
    };

    const navLinks = [
        { label: "About", href: "#about", icon: User, id: "about" },
        { label: "Skills", href: "#skills", icon: Code, id: "skills" },
        { label: "Projects", href: "#projects", icon: Briefcase, id: "projects" },
        { label: "Contact", href: "#contact", icon: Mail, id: "contact" },
    ];

    // 1. Intersection Observer Logic para malaman kung nasaan ang user habang nag-scroll sa desktop
    useEffect(() => {
        const observers = navLinks.map((link) => {
            const element = document.getElementById(link.id);
            if (!element) return null;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(link.id);
                    }
                },
                { rootMargin: "-30% 0px -60% 0px" } // Nagti-trigger kapag nasa gitna ng screen ang section
            );

            observer.observe(element);
            return { observer, element };
        });

        return () => {
            observers.forEach((item) => {
                if (item) item.observer.unobserve(item.element);
            });
        };
    }, []);

    return (
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-linear-to-b from-blue-950 to-black border border-slate-800 rounded-full text-slate-200 font-mono z-50 shadow-lg">
            <div className="flex justify-between items-center px-8 py-4 md:px-8 md:py-4">
                {/* Brand Title */}
                <span className="text-md md:text-2xl font-semibold tracking-wide leading-none">
                    My Portfolio
                </span>

                {/* Desktop Navigation Links */}
                <ul className="hidden md:flex items-center gap-6 text-base">
                    {navLinks.map((item) => {
                        const Icon = item.icon;
                        // Tinitingnan kung ito ba ang kasalukuyang active section
                        const isActive = activeSection === item.id;

                        return (
                            <li key={item.label}>
                                <a
                                    href={item.href}
                                    className={`flex items-center gap-2 px-3 py-1 border-2 text-md rounded-md transition-all duration-200 ${isActive
                                            ? "border-sky-400 text-sky-400" // Active state border lang, walang kulay sa background
                                            : "border-transparent text-slate-300 hover:border-sky-400 hover:text-sky-400"
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
                            className="p-1 rounded-md text-slate-300 hover:text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    </li>
                </ul>

                {/* Mobile Action Controls */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-1 text-slate-300 hover:text-amber-400 cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-1 text-slate-300 hover:text-sky-400 transition-colors cursor-pointer"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer Menu */}
            {isOpen && (
                <ul className="md:hidden absolute top-[110%] right-0 w-48 bg-linear-to-b from-slate-900 to-black border border-slate-800 rounded-2xl shadow-xl flex flex-col gap-2 p-4 text-base">
                    {navLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.label} className="w-full">
                                <a
                                    onClick={() => setIsOpen(false)} // 2. Ito ang nagre-remove/nagsasara ng dropdown kapag pinindot ang link sa mobile
                                    href={item.href}
                                    className="flex items-center gap-3 px-3 py-2 border-2 text-md border-transparent rounded-md hover:border-sky-400 text-slate-300 hover:text-sky-400 transition-all"
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
