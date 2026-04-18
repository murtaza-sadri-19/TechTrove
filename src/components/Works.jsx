import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github, demo } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  image,
  description,
  source_code_link,
  tags,
  deploymentStatus,
  deploymentLink,
}) => {
  return (
    // Applying Framer Motion animation to the component
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full pop-card pop-shadow"
      >
        <div className="relative w-full h-[300px] overflow-hidden rounded-2xl group">
          {/* Displaying the project image */}
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />

          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-2xl" />

          {/* Displaying the GitHub icon for source code link */}
          {(source_code_link || deploymentLink) && (
            <div className="absolute inset-0 flex justify-end items-end gap-2 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {source_code_link && (
                <button
                  onClick={() => window.open(source_code_link, "_blank")}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-cyan-500/50 border border-cyan-300/50"
                  title="View Source Code"
                >
                  <img
                    src={github}
                    alt="source code"
                    className="w-6 h-6 object-contain"
                  />
                </button>
              )}
              {deploymentLink && (
                <button
                  onClick={() => window.open(deploymentLink, "_blank")}
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex justify-center items-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:shadow-lg hover:shadow-pink-500/50 border border-pink-300/50"
                  title="View Live Demo"
                >
                  <img
                    src={demo}
                    alt="deployment link"
                    className="w-6 h-6 object-contain"
                  />
                </button>
              )}
            </div>
          )}
        </div>

        {/* Deployment Status Badge Below Image */}
        {deploymentStatus && (
          <div className="deployment-badge">
            {deploymentStatus}
          </div>
        )}

        <div className="mt-5">
          {/* Displaying the project name and description */}
          <h3 className="text-white font-bold text-[22px] lg:text-[24px] leading-tight hover:text-cyan-400 transition-colors duration-300">{name}</h3>
          <p className="mt-3 text-secondary text-[14px] leading-relaxed">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {/* Displaying project tags */}
          {tags.map((tag) => (
            <motion.p
              key={`${name}-${tag.name}`}
              whileHover={{ scale: 1.08 }}
              className={`text-[13px] ${tag.color} px-3 py-1.5 rounded-full bg-opacity-20 backdrop-blur-sm transition-all duration-300 border border-opacity-30 hover:border-opacity-60 font-medium`}
            >
              #{tag.name}
            </motion.p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
        Following projects showcases my skills
        and experience through
        real-world examples of my work. Each
        project is briefly described with
        links to code repositories and live
        demos in it. It reflects my
        ability to solve complex problems, work
        with different technologies,
        and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        { projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index ={index} {...project}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(Works,"work");