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

        {/* Grid container for contact links */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.name !== "Email" ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`relative p-6 rounded-2xl transition-transform transform hover:scale-105 w-full h-full flex flex-col items-center justify-center text-center bg-gradient-to-br ${link.bgGradient} shadow-lg`}
            >
              <div className="flex-grow flex flex-col items-center justify-center">
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-16 h-16 object-contain mb-4"
                />
                <h4
                  className="text-white text-xl font-bold mb-2"
                  style={{ color: link.color }}
                >
                  {link.name}
                </h4>
                <p className="text-secondary text-sm">{link.description}</p>
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
