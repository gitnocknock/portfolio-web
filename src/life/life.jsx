import { Link } from 'react-router-dom';
import richiPhoto from '../assets/richiInDaBox.JPG';
import img0996 from '../assets/IMG_0996.jpg';
import sunKissed from '../assets/richiMogging.webp';

function PhotoCard({ src, alt, caption, rotate = false }) {
    return (
        <div className="flex flex-col items-center w-full">
            <div className="relative w-full aspect-[20/11] overflow-hidden rounded-sm bg-black/5 dark:bg-white/5">
                {rotate ? (
                    <img
                        src={src}
                        alt={alt}
                        style={{
                            transform: 'rotate(-90deg)',
                            width: '55%',
                            height: '181.82%',
                            transformOrigin: 'center center',
                            position: 'absolute',
                            left: '22.5%',
                            top: '-40.91%',
                        }}
                        className="object-cover"
                    />
                ) : (
                    <img
                        src={src}
                        alt={alt}
                        className="w-full h-full object-cover"
                    />
                )}
            </div>
            {caption && (
                <div className="mt-2 md:mt-3 flex justify-center w-full">
                    <p style={{ fontFamily: "'Caveat', cursive" }} className="text-xl md:text-2xl text-center leading-tight">
                        {caption}
                    </p>
                </div>
            )}
        </div>
    );
}

export default function Life({ isDark, setIsDark }) {
    return (
        <div className="relative min-h-screen w-full p-4 md:p-12 overflow-y-auto">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
            `}</style>

            <Link
                to="/"
                className="absolute top-6 left-6 md:top-8 md:left-8 underline underline-offset-4 decoration-1 text-[1rem] md:text-[1.1rem] transition-opacity duration-200 hover:opacity-50 fade-in"
                style={{ animationDelay: '0.1s' }}
            >
                &larr; back
            </Link>

            <button
                onClick={() => setIsDark(!isDark)}
                className="absolute top-1 right-3 fade-in flex items-center justify-center w-11 h-11 cursor-pointer overflow-hidden rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200"
                style={{ animationDelay: '0.1s' }}
                aria-label="Toggle Theme"
            >
                <div className="relative w-6 h-6 flex items-center justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                    >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`absolute inset-0 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                    >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                </div>
            </button>

            <div className="absolute top-12 left-6 md:top-24 md:left-8 z-10 fade-in" style={{ animationDelay: '0.2s' }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl font-normal tracking-[-0.01em]">
                    miscellaneous.
                </h1>
            </div>

            <div className="pt-24 md:pt-35">
                <div className="grid grid-cols-3 gap-3 md:gap-10 w-full max-w-6xl mx-auto px-2 md:px-0">
                    <div className="fade-in" style={{ animationDelay: '0.4s' }}>
                        <PhotoCard src={richiPhoto} alt="Richi the cat" caption="my goat, richi" rotate />
                    </div>
                    <div className="fade-in" style={{ animationDelay: '0.6s' }}>
                        <PhotoCard src={img0996} alt="photo" caption="ipad kid ahh cat" />
                    </div>
                    <div className="fade-in" style={{ animationDelay: '0.8s' }}>
                        <PhotoCard src={sunKissed} alt="photo" caption="what is bro looking at??" />
                    </div>
                </div>
            </div>
        </div>
    );
}

