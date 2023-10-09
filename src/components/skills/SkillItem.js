import './SkillItem.scss';
import {useLayoutEffect, useRef} from "react";

export const SkillItem = ({skill}) => {
  const SkillRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          SkillRef.current.classList.add('hidden');
          return;
        }
        SkillRef.current.classList.remove('hidden');
      });
    }, {
      rootMargin: '-10%',
      threshold: 0
    });
    observer.observe(SkillRef.current);
    return () => {observer.disconnect()};
  }, [SkillRef]);

  return (
    <li className="skill-item" ref={SkillRef}>
      <img src={skill.logo} alt={skill.legend}/>
      <span>{skill.legend}</span>
    </li>
  );
};
