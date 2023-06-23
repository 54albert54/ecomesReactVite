import { useContext } from "react";
import { ShoooingCartContext } from "../../contex";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

export const ShoooingCart =()=>{
  const contex = useContext(ShoooingCartContext)

  const openCheckoutSideMenu = ()=>{
    contex.opeCheckout()
    contex.closeProductDetail()
  }
return(
<div className="relative flex gap-0.5 items-center" onClick={()=>{openCheckoutSideMenu}} >
<ShoppingBagIcon className="w-6 h-6 fill-none stroke-black cursor-pointer"/>
<div className="absolute bottom-3.5 left-3.5 flex justify-center items-center
rounded-full bg-black w-4 h-4 text-xs text-white">
  {contex.cartProducts.length}
</div>
</div>
)
};