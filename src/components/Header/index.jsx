import logo from "../../assets/portfolio.png";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.headerContainer}>
        <img src= {logo} alt="portfolio"/>
        <div className="menu">
            <p className="titlemenu">Sobre</p>
            <p className="titlemenu">Stack</p>
            <p className="titlemenu">Projetos</p>
        </div>
        <button className="btn">Contato</button>
    </header>
  );
};

export default Header;