import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center bg-fixed">
        <div className="absolute inset-0 bg-light-background/80 dark:bg-dark-background/90 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-7xl font-bold mb-4"
          >
            Hi, I'm <span className="text-light-secondary dark:text-dark-secondary">Shruti Agarwal</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-4xl text-light-textSecondary dark:text-dark-textSecondary mb-8"
          >
            Associate Software Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center mt-8"
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer bg-light-secondary/20 dark:bg-dark-secondary/20 p-4 rounded-full hover:bg-light-secondary/30 dark:hover:bg-dark-secondary/30 transition-all duration-300"
            >
              <FaChevronDown className="text-light-secondary dark:text-dark-secondary text-3xl animate-bounce" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;