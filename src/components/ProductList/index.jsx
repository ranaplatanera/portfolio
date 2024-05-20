import { ProductCard } from "./ProductCard";
import style from "./style.module.scss"

export const ProductList = ({ productList, addCartProduct }) => {
   return (
      <section className="container">
         <ul className={style.container}>
            {productList.map((product) => (
               <ProductCard 
                  key={product.id} 
                  product={product}
                  addCartProduct={addCartProduct} 
               />
            ))}
         </ul>   
      </section>      
   );
};
