import { useContext } from "react";
import { LayOut } from "../../Components/LayOut";
import { OrdersCars } from "../../Components/OrdersCars";
import { ShoooingCartContext } from "../../contex";
import { Link } from "react-router-dom";


export const MyOrders =()=>{
  const context = useContext(ShoooingCartContext)
return(
<LayOut>

<div className="flex items-center justify-center w-80 relative">

  <h1 className="font-medium text-xl mb-3"> MyOrders !! </h1>

</div>
{
context.order.map((order ,index)=>{

return(
  <Link key={index} to={`/my-orders/${index}`} >

  <OrdersCars
  totalPrice={order.totalPrice} 
  totalProducts={order.products.length} />
</Link>
)
})
}
</LayOut>
)
};