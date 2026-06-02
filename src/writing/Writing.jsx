import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function Writing({ isDark, setIsDark }) {
    const [isFirstVisit] = useState(true);

    return (
        <div className="flex flex-col justify-center items-center h-screen w-full text-center">

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-8 right-8 z-10" noAnimate={!isFirstVisit} />

            <h1
                className={`absolute top-4 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center${isFirstVisit ? ' fade-in' : ''}`}
                style={isFirstVisit ? { animationDelay: '0.1s' } : {}}
            >
                my writing
            </h1>

            <Link
                to="/"
                className={`fixed top-20 left-1/4 underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair${isFirstVisit ? ' fade-in' : ''}`}
                style={isFirstVisit ? { animationDelay: '0.2s' } : {}}
            >
                &larr; back
            </Link>

            <ul
                className={`fixed top-1/6 list-none p-0 m-0 text-left${isFirstVisit ? ' fade-in' : ''}`}
                style={isFirstVisit ? { animationDelay: '0.3s' } : {}}
            >
                <li className="mb-4">
                    <Link
                        to="/writing/first-post"
                        className="underline underline-offset-4 decoration-1 font-family-playfair text-[1.4rem] transition-opacity duration-200 hover:opacity-50"
                    >
                        first post
                    </Link>
                    <p className="text-[0.95rem] m-0 mb-1" style={{ fontFamily: "'Times New Roman', serif" }}>(2026-3-1)</p>
                </li>
            </ul>

        </div>
    );
}
