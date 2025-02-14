import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background transition-colors duration-300">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <main className="container mx-auto px-4">
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
}

export default App;