import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaFacebook, FaInstagram, FaYoutube, FaMedium } from 'react-icons/fa';

const Contact = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/ShrutiAgarwalll'
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin size={24} />,
      url: 'https://www.linkedin.com/in/shruti-agarwal-593908221'
    },
    {
      name: 'Email',
      icon: <FaEnvelope size={24} />,
      url: 'mailto:shrutiag1518@gmail.com'
    },
    {
      name: 'Youtube',
      icon: <FaYoutube size={24} />,
      url: ''
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://www.instagram.com/shrutii_agarwall/'
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={24} />,
      url: ''
    },
    {
      name: 'Medium',
      icon: <FaMedium size={24} />,
      url: ''
    },
  ];

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="section-title text-left">Contact Me</h2>
        
        <div className="flex justify-center space-x-8 mt-8">
          {socialLinks.map((link, index) => (
            link.url && (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-textPrimary hover:text-secondary transition-colors duration-300"
              >
                {link.icon}
              </motion.a>
            )
          ))}
        </div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto mt-8"
        >
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 bg-primary/30 border border-textSecondary rounded focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 bg-primary/30 border border-textSecondary rounded focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-2 bg-primary/30 border border-textSecondary rounded focus:outline-none focus:border-secondary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-secondary text-primary px-8 py-2 rounded hover:bg-opacity-80 transition-colors duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;