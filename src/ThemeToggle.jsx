export default function ThemeToggle({ isDark, setIsDark, className, noAnimate = false, style }) {
    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className={`${className ?? 'fixed top-8 right-8'}${noAnimate ? '' : ' fade-in'} flex items-center justify-center w-10 h-10 cursor-pointer overflow-hidden rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors duration-200`}
            style={style ?? (noAnimate ? undefined : { animationDelay: '0.1s' })}
            aria-label="Toggle Theme"
        >
            <div className="relative w-6 h-6 flex items-center justify-center">
                {/* Sun Icon */}
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

                {/* Moon Icon */}
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
    );
}
