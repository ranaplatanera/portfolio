import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./style.module.scss";

export const Header = ({ setVisible, cartList}) => {
   return (
      <header className={style.headerContainer}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button className={style.btn} onClick={() => setVisible(true)}>
               <MdShoppingCart size={21} />
               <span className={style.cartCounter}>{cartList.length}</span>
            </button>
         </div>
      </header>
   );
};
