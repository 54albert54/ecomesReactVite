import { createContext, useState } from "react";

export const ShoooingCartContext = createContext()

export const ShoppingCardProvider =({children})=>{
  const [count, setCount]= useState(0)

return(
  <ShoooingCartContext.Provider value={{count,setCount}}>
    {children}
  </ShoooingCartContext.Provider>
)
};