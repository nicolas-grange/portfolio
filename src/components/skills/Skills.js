import './Skills.scss';

import {useLayoutEffect, useRef} from "react";

import htmlLogo from "../../assets/skills/html.svg";
import cssLogo from "../../assets/skills/css.svg";
import sassLogo from "../../assets/skills/sass.svg";
import javaScriptLogo from "../../assets/skills/javascript.svg";
import reactLogo from "../../assets/skills/react.svg";
import javaLogo from "../../assets/skills/java.svg";
import springLogo from "../../assets/skills/spring.svg";
import jUnitLogo from "../../assets/skills/junit.svg";
import sqlLogo from "../../assets/skills/sql.svg";
import gitLogo from "../../assets/skills/git.svg";
import gitHubLogo from "../../assets/skills/github.svg";
import intelliJLogo from "../../assets/skills/intellij.svg";
import {SkillItem} from "./SkillItem";

const skills = [
  {
    logo: htmlLogo,
    legend: "HTML 5"
  },
  {
    logo: cssLogo,
    legend: "CSS 3"
  },
  {
    logo: sassLogo,
    legend: "SASS"
  },
  {
    logo: javaScriptLogo,
    legend: "JavaScript"
  },
  {
    logo: reactLogo,
    legend: "React"
  },
  {
    logo: javaLogo,
    legend: "Java"
  },
  {
    logo: springLogo,
    legend: "Spring"
  },
  {
    logo: jUnitLogo,
    legend: "JUnit"
  },
  {
    logo: sqlLogo,
    legend: "SQL"
  },
  {
    logo: gitLogo,
    legend: "Git"
  },
  {
    logo: gitHubLogo,
    legend: "GitHub"
  },
  {
    logo: intelliJLogo,
    legend: "IntelliJ"
  },
];

export const Skills = () => {
  const SkillsRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          SkillsRef.current.classList.add('hidden');
          return;
        }
        SkillsRef.current.classList.remove('hidden');
      });
    }, {
      rootMargin: '-20%',
      threshold: 0
    });
    observer.observe(SkillsRef.current);
    return () => {observer.disconnect()};
  }, [SkillsRef]);

  return (
    <section id="skills" ref={SkillsRef} className="skills">
      <div className="wrapper container">
        <h2>Compétences</h2>
        <ul>
          {skills.map((skill, index) => <SkillItem key={index} skill={skill} />)}
        </ul>
      </div>
    </section>
  );
};
