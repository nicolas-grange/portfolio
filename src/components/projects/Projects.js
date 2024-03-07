import './Projects.scss';
import project1 from "../../assets/projects/1.png";
import project2 from "../../assets/projects/2.png";
import project3 from "../../assets/projects/3.png";
import {ProjectItem} from "./ProjectItem";
import {useLayoutEffect, useRef} from "react";

const projects = [
  {
    title: "Réunion",
    image: project1,
    description: "Ce projet est né suite à mon déménagement sur l'île de la Réunion. Il permet de retracer mes visites ainsi que les randonnées effectuées au travers d'une carte interactive.",
    link: "https://nicolas-grange.github.io/reunion/hikes"
  },
  {
    title: "Path Finding",
    image: project3,
    description: "Petite application permettant de visualier la progression des algorithmes de recherche de chemins en fonction de différents paramètres. Site créé pour une présentation d'équipe sur l'IA.",
    link: "https://nicolas-grange.github.io/IA/"
  },
  {
    title: "Photography website",
    image: project2,
    description: "Un site vitrine d'un artiste photographe. Il s'agit de mon premier projet avec react. L'idée était simplement de manipuler la technologie afin de la découvrir.",
    link: "https://nicolas-grange.github.io/react-photos/"
  }
];
export const Projects = () =>  {

  const ProjectsRef = useRef(null);

  useLayoutEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          ProjectsRef.current.classList.add('hidden');
          return;
        }
        ProjectsRef.current.classList.remove('hidden');
      });
    }, {
      rootMargin: '-20%',
      threshold: 0
    });
    observer.observe(ProjectsRef.current);
    return () => {observer.disconnect()};
  }, [ProjectsRef]);

  return (
    <section id="projects" ref={ProjectsRef} className="projects">
      <div className="wrapper container">
        <h2>Projets</h2>
        <ul>
          {projects.map((project, index) => <ProjectItem key={index} project={project}/>)}
        </ul>
      </div>
    </section>
  );
};
