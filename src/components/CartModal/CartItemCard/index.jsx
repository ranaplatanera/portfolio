import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({cartProduct, removeProduct }) => {
   return (
      <li className={style.itemDiv}>
         <div className={style.box}>
            <div className={style.imgContainer}>
               <img src={cartProduct.img} alt={cartProduct.name} />
            </div>
            <div className={style.itemText}>
               <h3 className="Heading3">{cartProduct.name}</h3>
               <span className="Body-600">{cartProduct.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
            </div>
         </div>
         <button className={style.btn} aria-label="delete" title="Remover item" onClick={() => removeProduct(cartProduct.id)}>
            <MdDelete size={21} />
         </button>
      </li>
   );
};
