import { createContext, useState } from "react";

export const ShoooingCartContext = createContext()

export const ShoppingCardProvider =({children})=>{



  //conteo de carrito
  const [count, setCount]= useState(0)


   //Show -Product-Detail
  const [isProductDetailOpen,setIsProductDetailOpen]=useState(false)
  const openProductDetail =()=>{setIsProductDetailOpen(true)}
  const closeProductDetail =()=>{setIsProductDetailOpen(false)}
    
  //mostrar producto en la car
  const [productToShow,setTroductToShow]=useState({}) 


  const [cartProducts,setCarProducts] =useState([])

  

return(
  <ShoooingCartContext.Provider value={{
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    isProductDetailOpen,
    productToShow,
    setTroductToShow,
    cartProducts,
    setCarProducts

    }}>
    {children}
  </ShoooingCartContext.Provider>
)
};