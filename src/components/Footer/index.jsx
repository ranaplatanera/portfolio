import style from "./style.module.css";
import logo1 from "../../assets/whatsapp-icon.png";
import logo2 from "../../assets/linkedin-icon.png";
import logo3 from "../../assets/github-icon.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
        <div className={style.div1}>
            <h2 className="title2">Contato</h2>
            <div className={style.div2}>
                <img src={logo1} alt="whatsapp-icon"/>
                <img src={logo2} alt="linkedin-icon"/>
                <img src={logo3} alt="whatsapp-icon"/>
            </div>
        </div>
        <div className={style.div3}>
        <p className="paragraph">Todos os direitos reservados - José da Silva</p>
        </div>
    </footer>
  );
};

export default Footer;