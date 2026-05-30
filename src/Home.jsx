import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Penflow } from 'penflow/react';

const LARGE_SIZE = 80;
const INLINE_SIZE = 38;
const SCALE = INLINE_SIZE / LARGE_SIZE;

// Resets on full page refresh; survives SPA navigation
let introHasPlayed = false;

export default function Home({ isDark, setIsDark }) {
    const [settling, setSettling] = useState(false);
    const [showIntro, setShowIntro] = useState(true);
    const [contentVisible, setContentVisible] = useState(false);
    const [settleTransform, setSettleTransform] = useState(`scale(${SCALE})`);
    const inlineRef = useRef(null);

    useEffect(() => {
        const measureTimer = setTimeout(() => {
            if (inlineRef.current) {
                const rect = inlineRef.current.getBoundingClientRect();
                const targetX = rect.left + rect.width / 2 - window.innerWidth / 2;
                const targetY = rect.top + rect.height / 2 - window.innerHeight / 2;
                setSettleTransform(`translate(${targetX}px, ${targetY}px) scale(${SCALE})`);
            }
        }, 200);

        const t1 = setTimeout(() => setSettling(true), 3500);
        // Start fading content in while intro is still fading out — eliminates the flash
        const t2 = setTimeout(() => setContentVisible(true), 4200);
        // Remove intro from DOM only after transition fully completes
        const t3 = setTimeout(() => {
            introHasPlayed = true;
            setShowIntro(false);
        }, 6000);

        return () => {
            clearTimeout(measureTimer);
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
            // Reset so the animation replays next time the user returns to Home
            introHasPlayed = false;
        };
    }, []);

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <button
                onClick={() => setIsDark(!isDark)}
                className="absolute top-8 right-8 flex items-center justify-center w-10 h-10 cursor-pointer overflow-hidden rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
                style={{ opacity: contentVisible ? 1 : 0, pointerEvents: contentVisible ? 'auto' : 'none', transition: 'opacity 0.6s ease' }}
                aria-label="Toggle Theme"
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path><path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path><path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </div>
            </button>

            {/* Intro overlay — plays only on fresh page load */}
            {showIntro && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
                    style={{
                        transition: 'opacity 1.4s cubic-bezier(0.25, 0.1, 0.25, 1), transform 1.6s cubic-bezier(0.25, 0.1, 0.25, 1)',
                        opacity: settling ? 0 : 1,
                        transform: settling ? settleTransform : 'translate(0px, 0px) scale(1)',
                    }}
                >
                    <Penflow
                        text="Nikhil Chakre"
                        fontUrl="/fonts/BrittanySignature.ttf"
                        quality="snappy"
                        seed="nikhil"
                        size={LARGE_SIZE}
                        speed={0.85}
                        color={isDark ? '#ffffff' : '#000000'}
                    />
                </div>
            )}

            {/* Page content */}
            <div
                style={{
                    transition: 'opacity 0.6s ease',
                    opacity: contentVisible ? 1 : 0,
                }}
            >
                <h1 className="text-[2.4rem] font-normal m-0 mb-2 tracking-[-0.01em]">
                    hi! my name is{' '}
                    <span ref={inlineRef} className="inline-block align-middle">
                        <Penflow
                            text="Nikhil Chakre"
                            fontUrl="/fonts/BrittanySignature.ttf"
                            quality="balanced"
                            seed="nikhil"
                            size={INLINE_SIZE}
                            animate={false}
                            color={isDark ? '#ffffff' : '#000000'}
                        />
                    </span>
                </h1>
                <p className="text-[1.1rem] m-0 mb-6">
                    <i className="italic">i'm studying computer engineering at georgia tech.</i>
                </p>
                <nav className="flex justify-center gap-5 mb-4">
                    <Link to="/writing" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 font-family-playfair">writing</Link>
                    <Link to="/projects" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">projects</Link>
                    <a href="https://www.linkedin.com/in/nikhil-chakre-a58389197" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">linkedIn</a>
                    <a href="https://github.com/gitnocknock" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">github</a>
                </nav>
                <div>
                    <Link to="/life" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">misc.</Link>
                </div>
            </div>
        </>
    );
}
