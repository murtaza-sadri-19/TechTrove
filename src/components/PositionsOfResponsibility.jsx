import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { positionsOfResponsibility } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const PositionCard = ({ position }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={position.date}
    iconStyle={{ background: position.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full bg-white rounded-full pop-shadow">
        <img
          src={position.icon}
          alt={position.organization}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div className="pop-card pop-shadow rounded-lg p-4 transition-all duration-300">
      <h3 className="text-white text-[24px] font-bold">{position.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {position.organization}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {position.points.map((point, idx) => (
        <li
          key={`position-point-${idx}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider hover:text-cyan-400 transition-colors duration-200"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const PositionsOfResponsibility = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Leadership & Roles</p>
        <h2 className={styles.sectionHeadText}>Positions of Responsibility.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {positionsOfResponsibility.map((position, index) => (
            <PositionCard
              key={`position-${index}`}
              position={position}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(PositionsOfResponsibility, "positions");
