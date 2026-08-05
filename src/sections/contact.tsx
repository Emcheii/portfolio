function Contact() {
    return (
        <section id="contact" className="max-w-4xl mx-auto px-8 py-24 text-slate-200 font-mono text-center">

            <h2 className="text-3xl font-semibold tracking-wide mb-4">
                Let's build something
            </h2>

            <p className="text-slate-400 mb-10">
                Open to opportunities, collaborations, or just a chat about tech.
            </p>

            <a
                href="mailto:marloutabil799@gmail.com"
                className="inline-block px-4 py-3 border-2 border-sky-400 rounded-md text-sky-400 hover:bg-sky-400 hover:text-black transition-colors mb-10"
            >
                marloutabil799@gmail.com
            </a>

            <div className="flex justify-center gap-6 text-sm">
                
                <a
                    href="https://github.com/Emcheii"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sky-400 transition-colors"
                >
                    GitHub
                </a>

            </div>

        </section>
    )
}

export default Contact