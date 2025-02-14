import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: 'HRMS Portal',
      description: 'A comprehensive Human Resource Management System with employee management and performance tracking features.',
      tech: ['React.js', 'JavaScript', 'CSS3', 'HTML5', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Weather Forecast App',
      description: 'Real-time weather forecasting application with location-based updates and interactive UI.',
      tech: ['React.js', 'API Integration', 'CSS3', 'HTML5'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=60',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Sudoku Game',
      description: 'Created a fully interactive Sudoku game, implementing game logic, validation, and an engaging user interface to enhance the gaming experience.',
      tech: ['React.js', 'CSS3', 'HTML5'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Temperature Converter',
      description: 'Created a user-friendly temperature converter website allowing users to convert between different temperature units with real-time updates.',
      image: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&w=800&q=80',
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Portfolio</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-light-primary/5 dark:bg-dark-primary/30 rounded-lg overflow-hidden card-hover"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-light-secondary/20 dark:bg-dark-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <a href="#">
              <div className="p-6">      
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-light-textSecondary dark:text-dark-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <motion.span
                      key={tech}
                      className="skill-tag text-sm"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio;