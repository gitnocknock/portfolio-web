import { useState, useEffect } from 'react';
import './index.css';

function App() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <main className="flex justify-center items-center min-h-screen p-8 text-center bg-background text-text transition-colors duration-300 relative">
      <button
        onClick={() => setIsDark(!isDark)}
        className="absolute top-8 right-8 fade-in flex items-center justify-center gap-3 text-[1rem] italic cursor-pointer transition-opacity duration-200 hover:opacity-50"
        style={{ animationDelay: '0.1s' }}
        aria-label="Toggle Theme"
      >
        <span>{isDark ? 'dark' : 'light'}</span>
        <div className="w-8 h-[2px] bg-current relative flex items-center">
          <div
            className={`w-[10px] h-3 bg-current absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isDark ? 'right-0' : 'left-0'}`}
            style={{ borderRadius: '1px' }}
          />
        </div>
      </button>

      <div>
        <h1
          className="text-[2.4rem] font-normal m-0 mb-2 tracking-[-0.01em] fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          hi! my name is nikhil chakre
        </h1>
        <p
          className="text-[1.1rem] m-0 mb-6 fade-in"
          style={{ animationDelay: '0.4s' }}
        >
          <i className="italic">i'm studying computer engineering at georgia tech.</i>
        </p>

        <nav
          className="flex justify-center gap-5 mb-4 fade-in"
          style={{ animationDelay: '0.6s' }}
        >
          <a href="#" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">writing</a>
          <a href="#" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">projects</a>
          <a href="#" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">linkedIn</a>
          <a href="#" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">github</a>
        </nav>

        <div
          className="fade-in"
          style={{ animationDelay: '0.8s' }}
        >
          <a href="#" className="underline underline-offset-4 decoration-1 text-[1.1rem] transition-opacity duration-200 hover:opacity-50">life</a>
        </div>
      </div>
    </main>
  );
}

export default App;
