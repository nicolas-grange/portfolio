import "./Navigation.scss";
import {Toggle} from "../toggle/Toggle";
import {useEffect, useState} from "react";

const MenuItem = ({ active, itemId, itemLabel }) => {
  const [anchorTarget, setAnchorTarget] = useState(null);

  useEffect(() => {
    const anchor = document.getElementById(itemId);
    setAnchorTarget(anchor);
  }, [itemId]);

  const handleClick = event => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <li>
      <a href={`#${itemId}`}
         onClick={handleClick}
          className={active ? "active" : ""}>
        {itemLabel}
      </a>
    </li>
  );
}

export const Navigation = () => {

  const [activeItemId, setActiveItemId] = useState(null);
  const updateActiveItem = () => {
    const backgroundItemDOM = document.getElementById("background");
    const skillsItemDOM = document.getElementById("skills");
    const projectsItemDOM = document.getElementById("projects");
    const contactDOM = document.getElementById("contact");

    const margin = 15;
    if (contactDOM.getBoundingClientRect().top - margin <= 0) {
      setActiveItemId("contact");
      return;
    }
    if (projectsItemDOM.getBoundingClientRect().top - margin <= 0) {
      setActiveItemId("projects");
      return;
    }
    if (skillsItemDOM.getBoundingClientRect().top - margin <= 0) {
      setActiveItemId("skills");
      return;
    }
    if (backgroundItemDOM.getBoundingClientRect().top - margin <= 0) {
      setActiveItemId("background");
      return;
    }
    setActiveItemId(null);
  };

  useEffect(() => {
    updateActiveItem();
    window.addEventListener('scroll', updateActiveItem);
    return () => window.removeEventListener('scroll', updateActiveItem);
  });

  return (
    <div className="container">
      <nav className="navigation wrapper">
        <div className="main-menu">
          <ul>
            <MenuItem active={activeItemId === "background"} itemId={"background"} itemLabel={"Background"}/>
            <MenuItem active={activeItemId === "skills"} itemId={"skills"} itemLabel={"Compétences"}/>
            <MenuItem active={activeItemId === "projects"} itemId={"projects"} itemLabel={"Projets"}/>
            <MenuItem active={activeItemId === "contact"} itemId={"contact"} itemLabel={"Contact"}/>
          </ul>
        </div>
        <Toggle />
      </nav>
    </div>
  );
};
