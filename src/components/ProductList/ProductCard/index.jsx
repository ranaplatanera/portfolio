import style from "./style.module.scss"

export const ProductCard = ({ product, addCartProduct }) => {
    return(
        <li className={style.cardContainer}>
            <div className={style.imgContainer}>
                <img src={product.img} alt={product.name} />
            </div>
            <div className={style.divCard}>
                <h3 className="Heading3">{product.name}</h3>
                <span className="Caption">{product.category}</span>
                <span className="Body-600">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className={style.btn} onClick={() => addCartProduct (product)}>Adicionar</button>
            </div>
        </li>
    );
};