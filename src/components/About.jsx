import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'UI/UX Design'],
    programming: ['C++', 'DSA', 'OOPs', 'SQL'],
    tools: ['VS Code', 'GitHub', 'Git', 'Figma']
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
              <motion.p variants={item} className="text-light-textSecondary dark:text-dark-textSecondary">
                Proficient in Front-End Development and UI/UX design, with notable contributions to projects including an HRMS portal, weather forecasting website, and interactive applications utilizing ReactJS and JavaScript. Acknowledged for exceptional leadership and innovation, receiving accolades such as the High Flyer Award and Engaging Buddy of the Month.
              </motion.p>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              <motion.div variants={item} className="timeline-item">
                <div className="timeline-dot" />
                <h4 className="text-lg font-medium">Associate Software Developer</h4>
                <p className="text-light-secondary dark:text-dark-secondary">Strategyz Inc.</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">July 2024 - Jan 2025</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary mt-2">
                  Designed and developed real-time projects, enhanced HRMS functionalities, and contributed to employee engagement initiatives.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <motion.div variants={item} className="timeline-item">
                <div className="timeline-dot" />
                <h4 className="text-lg font-medium">Bachelor of Technology in Computer Science and Engineering</h4>
                <p className="text-light-secondary dark:text-dark-secondary">Amity University Madhya Pradesh</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">September 2021 - Aug 2025</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">CGPA: 8.36</p>
              </motion.div>
              
              <motion.div variants={item} className="timeline-item">
                <div className="timeline-dot" />
                <h4 className="text-lg font-medium">12th Grade</h4>
                <p className="text-light-secondary dark:text-dark-secondary">Delhi Public School, Gwalior</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">March 2021</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">Percentage: 91%</p>
              </motion.div>

              <motion.div variants={item} className="timeline-item">
                <div className="timeline-dot" />
                <h4 className="text-lg font-medium">10th Grade</h4>
                <p className="text-light-secondary dark:text-dark-secondary">Delhi Public School, Gwalior</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">March 2019</p>
                <p className="text-light-textSecondary dark:text-dark-textSecondary">Percentage: 89.8%</p>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <motion.div variants={item} className="mb-6">
              <h4 className="text-lg font-medium mb-2">Frontend Development</h4>
              <div className="flex flex-wrap">
                {skills.frontend.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item} className="mb-6">
              <h4 className="text-lg font-medium mb-2">Programming</h4>
              <div className="flex flex-wrap">
                {skills.programming.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h4 className="text-lg font-medium mb-2">Developer Tools</h4>
              <div className="flex flex-wrap">
                {skills.tools.map((skill) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;