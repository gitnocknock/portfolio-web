import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Writing from './writing/Writing';
import Home from './Home';
import FirstPost from './writing/blogs/FirstPost';
import SecondPost from './writing/blogs/SecondPost';
import Life from './life/life';
import Projects from './projects/Projects';

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
      <Routes>
        <Route path="/" element={<Home isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/writing" element={<Writing isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/writing/first-post" element={<FirstPost isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/writing/second-post" element={<SecondPost isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/life" element={<Life isDark={isDark} setIsDark={setIsDark} />} />
        <Route path="/projects" element={<Projects isDark={isDark} setIsDark={setIsDark} />} />
      </Routes>
    </main>
  );
}

export default App;
