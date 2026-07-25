import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] pop-card pop-shadow shine-effect"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col gradient-overlay"
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
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm <span className="text-white font-bold">Murtaza Sadriwala</span>, a
        Software Engineer and AI/ML Engineer who loves{" "}
        <span className="text-white font-semibold">
          turning complex problems into working systems
        </span>
        . Currently a{" "}
        <span className="text-white font-semibold">
          Software Engineering Intern at Mukta Labs
        </span>
        , where I build{" "}
        <span className="font-semibold text-white">
          knowledge graphs and NLP pipelines
        </span>
        . Previously at{" "}
        <span className="font-semibold text-white">
          Compu-Rf and CloudRaft
        </span>
        , shipping{" "}
        <span className="font-semibold text-white">
          computer vision pipelines and RAG systems
        </span>
        .
        <br />
        <br />
        I'm passionate about{" "}
        <span className="text-white font-bold text-lg">
          building intelligent systems
        </span>{" "}
        — from{" "}
        <span className="text-white font-semibold">
          knowledge graphs and entity extraction
        </span>{" "}
        to{" "}
        <span className="text-white font-semibold">
          computer vision and semantic retrieval
        </span>
        . My work spans{" "}
        <span className="text-white font-semibold">
          backend engineering, ML pipelines, and production infrastructure
        </span>
        .
        <br />
        <br />
        <span className="text-accent font-bold text-lg">
          GATE 2026 AIR 1765
        </span>{" "}
        •{" "}
        <span className="text-accent font-bold text-lg">
          President #include
        </span>{" "}
        •{" "}
        <span className="text-accent font-bold text-lg">
          ISRO IRoC Captain
        </span>
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
