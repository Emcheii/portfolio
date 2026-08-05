import {useState} from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [isDark, setIsDark] = useState(true)

    const toggleTheme = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark')
    }

    return(
        <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl bg-linear-to-b from-blue-950 to-black border border-slate-800 rounded-full text-slate-200 font-mono z-50 shadow-lg">

            <div className=" flex justify-between items-center px-8 py-4 md:px-8 md:py-4 ">

                <span className="text-md md:text-2xl font-semibold tracking-wide leading-none" >My Portfolio</span>

                <ul className="hidden md:flex gap-8 text-base">

                    <li>
                        <button onClick={toggleTheme} className="text-xl hover:scale-110 transition-transform">
                            {isDark ? "☀️" : "🌙"}
                        </button>
                    </li>

                    <li><a href="#about" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">About</a></li>
                    <li><a href="#skills" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">Skills</a></li>
                    <li><a href="#projects" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">Projects</a></li>
                    <li><a href="#contact" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">Contact</a></li>
            </ul>

                <div className="flex items-center gap-4 md:hidden">
                    <button onClick={toggleTheme} className="text-xl">
                        {isDark ? "☀️" : "🌙"}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
                        ☰
                    </button>
                </div>


            </div>

            {isOpen && (
                <ul className="md:hidden absolute top-full right-0 mt-2 bg-linear-to-b from-slate-900 to-black border border-slate-800 rounded-2xl shadow-lg flex flex-col gap-2 px-8 py-4 text-base">

                    <li><a href="#about" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">🧑 About</a></li>
                    <li><a href="#skills" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">🧠 Skills</a></li>
                    <li><a href="#projects" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">📑 Projects</a></li>
                    <li><a href="#contact" className="px-3 py-1 border-2 text-md border-transparent rounded-md hover:border-sky-400 active:border-sky-400  transition-colors">📞 Contact</a></li>
            </ul>
            )}

        </nav>
    )
};

export default Navbar;