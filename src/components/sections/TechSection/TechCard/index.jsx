const TechCard = ({ img, name }) => {
    return (
      <li className="techcard">
        <img className="icon" src={img} alt="#" />
        <h3 className="title3">{name}</h3>
      </li>
    );
  };
  
  export default TechCard;