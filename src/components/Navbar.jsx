import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ isMenuOpen, setIsMenuOpen, theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Portfolio', to: 'portfolio' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-light-primary/95 dark:bg-dark-primary/95 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-light-secondary dark:text-dark-secondary"
          >
            Portfolio
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  offset={-64}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-light-secondary/20 dark:hover:bg-dark-secondary/20 transition-colors duration-300"
            >
              {theme === 'light' ? (
                <FaMoon className="text-light-secondary" size={20} />
              ) : (
                <FaSun className="text-dark-secondary" size={20} />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-light-secondary/20 dark:hover:bg-dark-secondary/20 transition-colors duration-300"
            >
              {theme === 'light' ? (
                <FaMoon className="text-light-secondary" size={20} />
              ) : (
                <FaSun className="text-dark-secondary" size={20} />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-light-textPrimary dark:text-dark-textPrimary hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-light-primary dark:bg-dark-primary"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="block px-3 py-2 nav-link"
                  offset={-64}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;