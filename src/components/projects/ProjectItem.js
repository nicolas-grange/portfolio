import './ProjectItem.scss';
export const ProjectItem = ({project}) => {
  return (
    <li className="project-item">
      <a target="_blank"  href={project.link}>
        <div className="image-container">
          <img src={project.image} alt={project.title}/>
        </div>
        <div className="description">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      </a>
    </li>
  );
};
