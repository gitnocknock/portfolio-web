import { Link } from 'react-router-dom';
import ThemeToggle from '../../ThemeToggle';

export default function FirstPost({ isDark, setIsDark }) {
    return (
        <div className="flex flex-col items-center min-h-screen w-full fade-in pb-16 px-8">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-2 right-2 z-10" />

            <div className="w-full max-w-2xl text-left pt-16">
                <Link
                    to="/writing"
                    className="inline-block underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50 cursor-pointer font-family-playfair mb-8"
                >
                    &larr; back
                </Link>

                <h1 className="text-[3rem] m-0 mb-1 leading-tight" style={{ fontFamily: "'Times New Roman', serif" }}>
                    first ever blog, yay!!
                </h1>
                <p className="text-[0.95rem] mb-4 opacity-70" style={{ fontFamily: "'Times New Roman', serif" }}>
                    ~ February 28, 2026
                </p>

                <div className="text-[1.05rem] leading-relaxed space-y-4" style={{ fontFamily: "'Times New Roman', serif" }}>
                    <p className='italic'>heeelllooooo.</p>

                </div>
            </div>

        </div>
    );
}
