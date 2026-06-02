import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from '../ThemeToggle';
import richiPhoto from '../assets/richiInDaBox.JPG';
import img0996 from '../assets/IMG_0996.jpg';
import sunKissed from '../assets/richiMogging.webp';
import pond from '../assets/pond.webp';

function PhotoCard({ src, alt, caption, rotate = false, tilt = 0 }) {
    return (
        <div
            className="flex flex-col items-center w-full"
            style={{ transform: `rotate(${tilt}deg)` }}
        >
            <div className="bg-[#f5f0e8] p-2 pb-10 shadow-md w-full" style={{ boxShadow: '3px 4px 12px rgba(0,0,0,0.35)' }}>
                <div className="relative w-full aspect-4/3 overflow-hidden bg-black/10">
                    <img
                        src={src}
                        alt={alt}
                        style={rotate ? {
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            width: '133%',
                            height: '133%',
                            transform: 'translate(-50%, -50%) rotate(-90deg)',
                            objectFit: 'cover',
                        } : {}}
                        className={rotate ? '' : 'w-full h-full object-cover'}
                    />
                </div>
                {caption && (
                    <p
                        style={{ fontFamily: "'AnishHand', cursive", color: '#1a1a1a' }}
                        className="text-lg md:text-lg text-center leading-tight mt-2 px-1 font-bold"
                    >
                        {caption}
                    </p>
                )}
            </div>
        </div>
    );
}

export default function Life({ isDark, setIsDark }) {
    const [isFirstVisit] = useState(true);

    return (
        <div className="relative h-screen w-full p-4 md:p-12">
            <style>{`
                @font-face {
                    font-family: 'AnishHand';
                    src: url('/AnishHand.ttf') format('truetype');
                    font-display: block;
                }
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
            `}</style>

            <Link
                to="/"
                className={`absolute top-8 left-10 md:top-10 md:left-16 underline underline-offset-4 decoration-1 text-[1rem] md:text-[1.1rem] transition-opacity duration-200 hover:opacity-50${isFirstVisit ? ' fade-in' : ''}`}
                style={isFirstVisit ? { animationDelay: '0.1s' } : {}}
            >
                &larr; back
            </Link>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} className="fixed top-8 right-8 z-10" noAnimate={!isFirstVisit} />

            <div className={`absolute top-16 left-10 md:top-24 md:left-16 z-10${isFirstVisit ? ' fade-in' : ''}`} style={isFirstVisit ? { animationDelay: '0.2s' } : {}}>
                <h1 style={{ fontFamily: "'Playfair Display', serif" }} className="text-3xl md:text-4xl font-normal tracking-[-0.01em]">
                    miscellaneous.
                </h1>
            </div>

            <div className="pt-24 md:pt-35">
                <div className="grid grid-cols-4 gap-3 md:gap-8 w-full max-w-6xl mx-auto px-2 md:px-0">
                    <div className={isFirstVisit ? 'fade-in' : ''} style={isFirstVisit ? { animationDelay: '0.4s' } : {}}>
                        <PhotoCard src={richiPhoto} alt="Richi the cat" caption="richi" rotate tilt={-2} />
                    </div>
                    <div className={isFirstVisit ? 'fade-in' : ''} style={isFirstVisit ? { animationDelay: '0.6s' } : {}}>
                        <PhotoCard src={img0996} alt="photo" caption="ipad kid ahh cat" tilt={1.5} />
                    </div>
                    <div className={isFirstVisit ? 'fade-in' : ''} style={isFirstVisit ? { animationDelay: '0.8s' } : {}}>
                        <PhotoCard src={sunKissed} alt="photo" caption="what is bro looking at??" tilt={-1} />
                    </div>
                    <div className={isFirstVisit ? 'fade-in' : ''} style={isFirstVisit ? { animationDelay: '1.0s' } : {}}>
                        <PhotoCard src={pond} alt="pond" caption="cool little pond" tilt={2} />
                    </div>
                </div>
            </div>
        </div>
    );
}
