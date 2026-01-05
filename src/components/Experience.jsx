import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement 
    contentStyle={{ background: "#1d1836", color: '#fff' }} 
    contentArrowStyle={{ borderRight: '7px solid #232631' }}
    date={experience.date} 
    iconStyle={{ background: experience.iconBg }} 
    icon={
      <div className="flex justify-center items-center w-full h-full bg-white rounded-full pop-shadow">
        <img src={experience.icon} alt={experience.company_name} className="w-[80%] h-[80%] object-contain"/>
      </div>
    }
  >
    <div className="pop-card pop-shadow rounded-lg p-4 transition-all duration-300">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`} 
          className="text-white-100 text-[14px] pl-1 tracking-wider hover:text-cyan-400 transition-colors duration-200"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");