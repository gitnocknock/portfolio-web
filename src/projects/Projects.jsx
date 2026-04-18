import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function Projects({ isDark, setIsDark }) {
    const projects = [
        {
            title: "buzzbuzz",
            tech: "react, typescript, python, django, postgresql",
            bullets: [
                "made a campus wide map that shows clubs/events that are going on.",
                "used selenium to scrape the events and clubs and used position stack to plot them onna map."
            ]
        },
        {
            title: "airl chess agent",
            tech: "python",
            bullets: [
                "adversarial inverse reinforcement learning that uses your chess games to play games like the user.",
                "used cnn's and behavioral pre-training to ensure that the agent follows similar techniques to users games."
            ]
        },
        {
            title: "loom",
            tech: "react, spring boot, aws, docker, tailwind",
            bullets: [
                "cool new project i am working on more to come soon :)"
            ]
        },
        {
            title: "flight guard ai",
            tech: "react, typescript, python, next.js, convex",
            bullets: [
                "used fetch.ai to find flights and use AeroDataBox to find cheap flights.",
                "used convex for real time syncing."
            ]
        }
    ];

    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-24 px-8" style={{ animationDelay: '0.2s' }}>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <h1 className="absolute top-1 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center font-family-playfair pt-4">
                my projects
            </h1>

            <Link
                to="/"
                className="fixed top-20 left-4 md:left-[20%] underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair"
            >
                &larr; back
            </Link>

            <div className="w-full max-w-lg text-left mt-32 space-y-10" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                {projects.map((proj, idx) => (
                    <div key={idx}>
                        <div className="flex items-baseline flex-wrap gap-2 mb-1">
                            <h2 className="text-[1.0rem] md:text-[1.2rem] m-0 leading-tight font-normal">
                                {proj.title}
                            </h2>
                            {/* <a href="#" className="text-[0.9rem] underline decoration-normal text-inherit hover:opacity-50 transition-opacity">
                                (github)
                            </a> */}
                        </div>

                        <h3 className="text-[0.9rem] md:text-[1rem] italic m-0 mb-2 font-normal">
                            {proj.tech}
                        </h3>

                        <ul className="list-disc pl-[0.8rem] m-0 space-y-1">
                            {proj.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="text-[0.9rem] md:text-[0.95rem] leading-[1.4]">
                                    {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
