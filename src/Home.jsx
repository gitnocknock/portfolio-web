import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Penflow } from 'penflow/react';
import ThemeToggle from './ThemeToggle';

const LARGE_SIZE = 80;
const INLINE_SIZE = 38;
const SCALE = INLINE_SIZE / LARGE_SIZE;

// Resets on full page refresh; survives SPA navigation
let introHasPlayed = false;

export default function Home({ isDark, setIsDark }) {
    const [settling, setSettling] = useState(false);
    const [showIntro, setShowIntro] = useState(!introHasPlayed);
    const [contentVisible, setContentVisible] = useState(introHasPlayed);
    const [settleTransform, setSettleTransform] = useState(`scale(${SCALE})`);
    const inlineRef = useRef(null);

    useEffect(() => {
        if (introHasPlayed) {
            setShowIntro(false);
            setContentVisible(true);
            return;
        }

        const measureTimer = setTimeout(() => {
            if (inlineRef.current) {
                const rect = inlineRef.current.getBoundingClientRect();
                const targetX = rect.left + rect.width / 2 - window.innerWidth / 2;
                const targetY = rect.top + rect.height / 2 - window.innerHeight / 2;
                setSettleTransform(`translate(${targetX}px, ${targetY}px) scale(${SCALE})`);
            }
        }, 200);

        introHasPlayed = true;

        const t1 = setTimeout(() => setSettling(true), 3500);
        const t2 = setTimeout(() => setContentVisible(true), 4200);
        const t3 = setTimeout(() => setShowIntro(false), 6000);

        return () => {
            clearTimeout(measureTimer);
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, []);

    return (
        <>
            <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:32px_32px]"></div>

            <ThemeToggle
                isDark={isDark}
                setIsDark={setIsDark}
                className="fixed top-8 right-8 z-10"
                noAnimate
                style={{ opacity: contentVisible ? 1 : 0, pointerEvents: contentVisible ? 'auto' : 'none', transition: 'opacity 0.6s ease' }}
            />

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
