import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to <span className="text-white font-bold">my portfolio</span>!
        I'm <span className="text-white font-bold">Murtaza Sadriwala</span>, a
        third-year B.Tech student who loves{" "}
        <span className="text-white font-semibold">
          turning ideas into things that actually work
        </span>
        . I enjoy exploring how{" "}
        <span className="text-white font-semibold">
          code, data, and creativity
        </span>{" "}
        <span className="text-white">converge</span> — whether it's{" "}
        <span className="font-semibold text-white">
          building intelligent systems
        </span>
        ,{" "}
        <span className="font-semibold text-white">
          experimenting with computer vision
        </span>
        , or{" "}
        <span className="font-semibold text-white">
          shaping products that solve real problems
        </span>
        . Through{" "}
        <span className="text-white font-semibold">impactful projects</span>,{" "}
        <span className="text-white font-semibold">
          competitive hackathons
        </span>
        , and{" "}
        <span className="text-white font-semibold">
          research-driven challenges
        </span>
        , I've learned to{" "}
        <span className="text-white font-bold">
          think deeper and build smarter
        </span>
        .
        <br />
        What truly captivates me is{" "}
        <span className="text-white font-bold text-lg">
          AI and machine learning
        </span>{" "}
        — where models{" "}
        <span className="text-white font-semibold">don't just compute</span>,
        they <span className="text-white font-semibold">learn</span>,{" "}
        <span className="text-white font-semibold">adapt</span>, and{" "}
        <span className="text-white font-bold">surprise</span>. My journey has
        been fueled by{" "}
        <span className="text-white font-semibold">
          curiosity and consistency
        </span>
        . I'm passionate about{" "}
        <span className="font-semibold text-white">
          breaking complexity into elegance
        </span>{" "}
        and crafting solutions that feel{" "}
        <span className="text-white font-semibold">
          thoughtful and human
        </span>
        .
        <br />
        <br />
        <span className="text-blue-400 font-bold text-lg">
          Always learning
        </span> •{" "}
        <span className="text-blue-400 font-bold text-lg">Always building</span> •{" "}
        <span className="text-blue-400 font-bold text-lg">Always excited</span>{" "}
        about what's next.
      </motion.p>
      <div className="mt-20 flex flex-wrap justify-center justify-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
