import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./style.module.scss";

export const CartModal = ({ setVisible, cartList, removeProduct, removeAllProduct }) => {
   const total = cartList.reduce((prevValue, cartProduct) => {
      return prevValue + cartProduct.price;
   }, 0);

   return (
      <div role="dialog" className={style.overlayBox}>
         <div className={style.modalBox}>
            <div className={style.headerBox}>
               <h3>Carrinho de compras</h3>
               <button className= {style.btn} onClick={() => setVisible(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className={style.itemsDiv}>
               <ul >
                  {cartList.map((cartProduct) => (
                     <CartItemCard 
                     key={cartProduct.id} 
                     cartProduct={cartProduct} 
                     setVisible={setVisible}
                     removeProduct={removeProduct}/>
                  ))}
               </ul>
            </div>
            <div className= {style.totalDiv}>
               <div className= {style.totalText}>
                  <span className= {style.headline} >Total</span>
                  <span className= {style.total}>{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
               </div>
               <button className= {style.btn} onClick={() => removeAllProduct()}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};