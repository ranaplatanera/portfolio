import TechCard from "./TechCard";
import { technologies } from "../../../data/technologies";

const TechSection = () => {
  return (
    <section className="listSectionContainer">
      <h2 className="title2">Tecnologias</h2>
      <ul className="listSectionContainer__ul">
        {technologies.map((el, i) => (
          <TechCard key={i} img={el.img} name={el.name} />
        ))}
      </ul>            
    </section>
  );
};
  
export default TechSection;