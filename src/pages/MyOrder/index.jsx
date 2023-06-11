import { LayOut } from "../../Components/LayOut";
import { useContext } from 'react';
import { ShoooingCartContext } from '../../contex';
import { OrderCars } from "../../Components/OrderCars";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";


export const MyOrder =()=>{
  const context = useContext(ShoooingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/')+1)
  if (index === "last") index = context.order?.length-1
 

return(
<LayOut>
<div className="flex items-center justify-center w-80 relative">
<Link to="/my-orders" className="absolute left-0">
<ChevronLeftIcon className=" h-6 w-6 text-black cursor-pointer"/>
</Link>
  <h1> MyOrders !! </h1> </div>
  <div className='flex flex-col w-80'>
    
{
context.order?.[index]?.products.map(product => {

  return(
    
  <OrderCars
  key={product.id}
  id={product.id}
  title={product.title}
  imageUrl={product.images[0]}
  price={product.price}

  />
  
  )
})}
</div>
</LayOut>
)
};