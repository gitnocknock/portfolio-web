import { Link } from 'react-router-dom';
import ThemeToggle from '../../ThemeToggle';

export default function SecondPost({ isDark, setIsDark }) {
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
                    airl and life
                </h1>
                <p className="text-[0.95rem] mb-4 opacity-70" style={{ fontFamily: "'Times New Roman', serif" }}>
                    ~ March 26, 2026
                </p>

                <div className='flex flex-col' style={{ fontFamily: "'IM Fell English', serif" }}>
                    <p className='italic text-[1.4rem] leading-relaxed m-0'>
                        "Like all magnificent things, it's very simple."
                        <span className="block text-[0.9rem] text-gray-500/80 mt-1 opacity-90 not-italic ml-[50%]">
                            — Natalie Babbitt<br /><br /><br />
                        </span>
                    </p>
                    <p>
                        Adversarial Inverse Reinforcement Learning (a mouthful, I know). 
                        Because I am lazy, hence forth, I will be calling it airl.

                        <br></br>
                       
                        <span className="block text-right mt-2 mr-4 opacity-80 text-[1.2rem]">
                            - nikhil c
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
