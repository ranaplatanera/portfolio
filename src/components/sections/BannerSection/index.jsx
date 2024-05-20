import banner from "../../../assets/banner-img.png";
import style from "./style.module.css";

const BannerSection = () => {
    return (
        <section className={style.container}>
            <div className={style.group}>
                <h4 className="label">JOSEDASILVA</h4>
                <h1 className="title1">Bem vindo ao meu portfólio</h1>
                <p className="paragraph">Uma frase interessante sobre mim</p>
                <button className="btn">Saiba mais</button>
            </div>
            <div className={style.group2}>
                <img src= {banner} alt="banner-img"/>
            </div>
        </section>
    );
};
  
export default BannerSection;