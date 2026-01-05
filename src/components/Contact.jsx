import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { contactLinks } from "../constants";

// Define Contact component
const Contact = () => {
  return (
    // A container with flex layout, different styles based on screen size, and no overflow
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      {/* A motion component with animation variants for sliding in from the left */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        {/* A text heading and subheading for the contact section */}
        <p className={styles.sectionSubText}>Let's Connect</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        {/* Primary CTA Button - Enhanced Visual Weight */}
        <div className="mt-12 mb-12">
          <a
            href="mailto:murtazasadriwala09@gmail.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00d4ff] via-[#bf61ff] to-[#00cea8] rounded-lg font-bold text-white text-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-[#00d4ff]"
          >
            Get In Touch
          </a>
        </div>

        {/* Grid container for contact links - Reduced visual weight */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`relative p-4 rounded-lg transition-transform transform hover:scale-102 w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br ${link.bgGradient} shadow-md hover:shadow-lg`}
              title={link.username}
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-12 h-12 object-contain mb-2 opacity-80"
                />
                <h4
                  className="text-white text-sm font-semibold"
                  style={{ color: link.color }}
                >
                  {link.name}
                </h4>
                <p className="text-secondary text-xs hidden sm:block">{link.description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* A motion component with animation variants for sliding in from the right */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

// Export the Contact component wrapped in the SectionWrapper
export default SectionWrapper(Contact, "contact");
