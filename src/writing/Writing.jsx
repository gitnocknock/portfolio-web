import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';

export default function Writing({ isDark, setIsDark }) {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen w-full text-center fade-in" style={{ animationDelay: '0.2s' }}>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <h1 className="absolute top-1 left-0 text-[2rem] font-normal m-0 tracking-[-0.01em] w-full text-center">
                my writing
            </h1>

            <Link
                to="/"
                className="fixed top-20 left-1/4 underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair"
            >
                &larr; back
            </Link>

            <ul className="fixed top-1/6 list-none p-0 m-0 text-left">
                <li className="mb-4">
                    <Link
                        to="/writing/first-post"
                        className="underline underline-offset-4 decoration-1 font-family-playfair text-[1.4rem] transition-opacity duration-200 hover:opacity-50"
                    >
                        first post
                    </Link>
                    <p className="text-[0.95rem] m-0 mb-1" style={{ fontFamily: "'Times New Roman', serif" }}>(2026-3-1)</p>
                    <br></br> 
                    <Link
                        to="/writing/second-post"
                        className="underline underline-offset-4 decoration-1 font-family-playfair text-[1.4rem] transition-opacity duration-200 hover:opacity-50"
                    >
                        airl and life
                    </Link>
                    <p className="text-[0.95rem] m-0 mb-1" style={{ fontFamily: "'Times New Roman', serif" }}>(2026-3-26)</p>
                </li>
            </ul>

        </div>
    );
}
