import ProjectCard from "./ProjectCard";
import { projects } from  "../../../data/projects";

const ProjectsSection = () => {
  return (
    <section className="listSectionContainer">          
      <h2 className="title2">Projetos</h2>
      <ul className="listSectionContainer__ul">
      {projects.map((el, i) => (
        <ProjectCard key={i} name={el.name} description={el.description}/>
        ))}
      </ul>
    </section>
  );
};                                                          
  
export default ProjectsSection;