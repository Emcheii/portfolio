import profile from "../assets/light-mode.png"

function About(){
    return(
        <section id="about" className="max-w-4xl mx-auto px-8 py-24 pb-8 text-slate-800 dark:text-slate-200 font-sans">

            <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                    <img
                        loading="lazy"
                        src={profile}
                        alt="Marlou Profile"
                        className="w-full h-full rounded-full border border-slate-300 dark:border-slate-800 object-cover dark:hidden"
                    />
                    <img
                        loading="lazy"
                        src={`${import.meta.env.BASE_URL}dark-mode.png`}
                        alt="Marlou Profile wearing sunglasses"
                        className="hidden w-full h-full rounded-full border border-slate-300 dark:border-slate-800 object-cover dark:block"
                    />
                </div>
                
                <div className="text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
                        Marlou Jay C. Tabil
                    </h1>
                    <p className="mt-2 text-lg text-slate-600 dark:text-slate-400">
                        BS Computer Science Student | Specializing in Data Mining | Aspiring Web Developer
                    </p>
                </div>
            
            </div>

            <p className="mt-12 text-slate-700 dark:text-slate-300 leading-relaxed text-justify">
                I'm a fourth-year BS Computer Science student specializing in Data Mining. I'm passionate about web development and currently learning backend technologies such as Node.js, Flask, and MySQL while building projects to strengthen my skills. My goal is to become a software developer who creates practical and reliable web applications.
            </p>

        </section>
    )

};


export default About;