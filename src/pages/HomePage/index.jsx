import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { ProductList } from "../../components/ProductList";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { hambAPI } from "../../services/api";
import { toast } from "react-toastify";


export const HomePage = () => {
   const [isVisible, setVisible] = useState(false);
   const [productList, setProductList] = useState([]);
   const localCartList = localStorage.getItem("@CARTLIST");
   const [cartList, setCartList] = useState(
      localCartList ? JSON.parse(localCartList) : []);
   
   useEffect(() => {
      localStorage.setItem("@CARTLIST", JSON.stringify(cartList));
   }, [cartList]);

   useEffect(() => {
      const getProducts = async () => {
         const { data } = await hambAPI.get("/products");
         setProductList(data); 
      };

      getProducts();
   }, []);

      const addCartProduct = (product) => {
      const hasCartProduct = cartList.some((cartProduct) => cartProduct.id === product.id);
  
      if (!hasCartProduct) {
         setCartList([...cartList, product]);
         toast.success("Produto adicionado com sucesso!");
      } else {
        toast.error("Produto já adicionado!");
      }
    };

   const removeProduct = (cartProductId) => {
      const newCartList = cartList.filter(({ id }) => id !== cartProductId);
      setCartList(newCartList);
    };

   const removeAllProduct = () => {
      const emptyCartList = [];
      setCartList (emptyCartList);
   };



   return (
      <>
         <DefaultTemplate setVisible={setVisible} cartList={cartList}>
            <ProductList productList={productList} addCartProduct={addCartProduct} />
         </DefaultTemplate>

         {isVisible ? (
            <CartModal
               setVisible={setVisible}
               cartList={cartList}
               removeProduct={removeProduct}
               removeAllProduct ={removeAllProduct}
            />
         ) : null}
      </>
   );
};