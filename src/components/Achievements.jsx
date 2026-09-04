import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { achievements } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn } from "../utils/motion";

const AchievementCard = ({ index, title, organization, date, points, tag, icon }) => {
  const isLeadership = tag === "Leadership";

  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.1, 0.6)}
      className="w-full sm:w-[350px] flex-grow group"
    >
      <article
        className="relative h-full p-6 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between"
        style={{
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = isLeadership ? "rgba(217,194,77,0.30)" : "rgba(108,134,181,0.30)";
          e.currentTarget.style.boxShadow = isLeadership
            ? "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(217,194,77,0.08)"
            : "inset 0 1px 1px rgba(255,255,255,0.1), 0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(108,134,181,0.08)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
          e.currentTarget.style.boxShadow = "inset 0 1px 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.4)";
        }}
      >
        <div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              {icon && (
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 p-1.5 flex items-center justify-center flex-shrink-0">
                  <img src={icon} alt={organization} className="w-full h-full object-contain rounded-lg" />
                </div>
              )}
              <div>
                <span className="text-secondary text-[11px] font-mono tracking-wider block">
                  {date}
                </span>
                <span
                  className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold uppercase tracking-wider inline-block mt-1"
                  style={{
                    background: isLeadership ? "rgba(217,194,77,0.10)" : "rgba(108,134,181,0.10)",
                    border: isLeadership ? "1px solid rgba(217,194,77,0.25)" : "1px solid rgba(108,134,181,0.25)",
                    color: isLeadership ? "#d9c24d" : "#6c86b5",
                  }}
                >
                  {tag}
                </span>
              </div>
            </div>
            <span className="text-accent font-mono text-xs font-bold opacity-60">0{index + 1}</span>
          </div>

          <h3 className="font-heading font-bold text-white-100 text-lg leading-snug mb-1">
            {title}
          </h3>
          <p className="font-mono text-xs font-semibold text-secondary mb-3">
            {organization}
          </p>

          <div className="h-[1px] bg-white/5 my-3" />

          <ul className="space-y-2">
            {points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-secondary leading-relaxed group-hover:text-white-100/90 transition-colors">
                <span className="mt-0.5 flex-shrink-0" style={{ color: isLeadership ? "#d9c24d" : "#6c86b5" }} aria-hidden="true">▹</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </motion.div>
  );
};

const Achievements = () => {
  return (
    <section className="relative">
      <div>
        <p className={styles.sectionSubText}>Recognition &amp; Competitions</p>
        <h2 className={styles.sectionHeadText}>Achievements.</h2>
      </div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-base leading-relaxed max-w-3xl"
      >
        National rankings, hackathon honors, and technical leadership positions earned across engineering competitions and student organizations.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-6 justify-start">
        {achievements.map((item, index) => (
          <AchievementCard
            key={`achievement-${index}`}
            index={index}
            {...item}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Achievements, "achievements");
