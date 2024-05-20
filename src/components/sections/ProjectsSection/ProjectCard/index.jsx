import gitIcon from "../../../../assets/git-icon.png";

const ProjectCard = ({ name, description }) => {
  return (
    <li className="projectcard">
      <div className="divcard">
        <h3 className="title3">{name}</h3>
        <p className="paragraph">{description}</p>
        <span class="link">Saiba mais</span>
      </div>
      <img className="icon" src= {gitIcon} alt="git-icon"/>
    </li>
  );
};
  
export default ProjectCard;