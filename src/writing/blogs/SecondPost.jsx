import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../../ThemeToggle';

let secondPostVisited = false;

export default function SecondPost({ isDark, setIsDark }) {
    const [isFirstVisit] = useState(!secondPostVisited);

    useEffect(() => {
        secondPostVisited = true;
    }, []);

    return (
        <div className={`flex flex-col items-center h-screen w-full overflow-y-auto ${isFirstVisit ? 'fade-in' : ''} pb-16 px-8`}>
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-8 right-8 z-10" noAnimate={!isFirstVisit} />

            <div className="w-full max-w-2xl text-left pt-16">
                <Link
                    to="/writing"
                    className="inline-block underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair mb-8"
                >
                    &larr; back
                </Link>

                <h1 className="text-[3rem] m-0 mb-1 leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
                    second post
                </h1>
                <p className="text-[0.95rem] mb-4 opacity-70" style={{ fontFamily: "'Times New Roman', serif" }}>
                    ~ coming soon
                </p>

                <div className='flex flex-col' style={{ fontFamily: "'IM Fell English', serif" }}>
                    <p>
                        more to come.
                    </p>
                </div>
            </div>
        </div>
    );
}
