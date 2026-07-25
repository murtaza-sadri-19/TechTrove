import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences, leadership } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1e1914", color: "#f0ebe5" }}
    contentArrowStyle={{ borderRight: "7px solid #2a221c" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full bg-white rounded-full pop-shadow">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div className="pop-card pop-shadow rounded-lg p-4 transition-all duration-300">
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p
        className="text-accent text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, idx) => (
        <li
          key={`experience-point-${idx}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider hover:text-accent-secondary transition-colors duration-200"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const LeadershipCard = ({ item }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1e1914", color: "#f0ebe5" }}
    contentArrowStyle={{ borderRight: "7px solid #2a221c" }}
    date={item.date}
    iconStyle={{ background: item.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full bg-white rounded-full pop-shadow">
        <img
          src={item.icon}
          alt={item.organization}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div className="pop-card pop-shadow rounded-lg p-4 transition-all duration-300">
      <h3 className="text-white text-[24px] font-bold">{item.title}</h3>
      <p
        className="text-accent text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {item.organization}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {item.points.map((point, idx) => (
        <li
          key={`leadership-point-${idx}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider hover:text-accent-secondary transition-colors duration-200"
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
      <div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      <div className="mt-20">
        <p className={styles.sectionSubText}>Achievements & Leadership</p>
        <h2 className={styles.sectionHeadText}>Leadership.</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {leadership.map((item, index) => (
            <LeadershipCard
              key={`leadership-${index}`}
              item={item}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "experience");
