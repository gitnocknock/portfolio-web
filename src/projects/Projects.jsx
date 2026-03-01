import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function Projects({ isDark, setIsDark }) {
    const projects = [
        {
            title: "buzzbuzz",
            tech: "react, typescript, python, django, postgresql",
            bullets: [
                "developed a react and typescript platform for 500+ clubs to centralize campus organization searches.",
                "optimized django rest api with postgresql indexing to enable crud and filtering, cutting latency by 60%.",
                "engineered a selenium and openai pipeline to automate 100% of data collection and processing."
            ]
        },
        {
            title: "airl chess agent",
            tech: "python",
            bullets: [
                "built 4,672-action space openai gym wrapper to facilitate reinforcement learning without manual engineering.",
                "engineered 3-layer cnns and behavioral cloning to recover reward functions with 95% expert alignment.",
                "benchmarked agent against stockfish to achieve expert-level policy mimicking with 92% move accuracy."
            ]
        },
        {
            title: "removeo",
            tech: "react, flask, typescript, python",
            bullets: [
                "this is a placeholder! this is a placeholder! this is a placeholder! this is a placeholder! this is a placeholder!",
                "this is a placeholder! this is a placeholder! this is a placeholder! this is a placeholder! this is a placeholder!",
                "this is a placeholder! this is a placeholder! this is a placeholder! this is a placeholder! this is a placeholder!"
            ]
        },
        {
            title: "flight guard ai",
            tech: "react, typescript, python, next.js, convex",
            bullets: [
                "deployed a convex-based flight monitor to sync real-time state for 1,000+ users with sub-50ms latency.",
                "engineered an autonomous fetch.ai agent to scrape flight data and detect cancellations with 95% accuracy.",
                "integrated aerodatabox api to automate optimal rebooking, reducing travel disruption recovery time by 40%."
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
                            <a href="#" className="text-[0.9rem] underline decoration-normal text-inherit hover:opacity-50 transition-opacity">
                                (github)
                            </a>
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
