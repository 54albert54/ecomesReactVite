import { XMarkIcon } from '@heroicons/react/24/solid'



import  './style.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShoooingCartContext } from '../../contex';
import { OrderCars } from '../OrderCars';
import { totalPrice } from '../../utils'

    
  



export const CheckoutSideMenu =()=>{
  const context = useContext(ShoooingCartContext)

  const handleDelete = (id)=>{
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCarProducts(filteredProducts)
  }
  const handleCheckout =() =>{
    const orderToAdd = {
      date: "01,02,2023",
      products:context.cartProducts,
      totalProduct:context.cartProducts.length,
      totalPrice:totalPrice(context.cartProducts)
    }
    context.setOrder([...context.order, orderToAdd])
    context.setCarProducts([])
    context.setSearchByTitle(null)
 
      context.closeProductSideMenu()
   
    
  }
  
return(
<aside  className={`${context.isProductDitailMenuOpen?'flex':'hidden'}   cardShopping checkout-side-menu  flex-col fixed right-0 border border-black rounded bg-white`}>
<div className='flex justify-between items-center p-6'>
<h2 className='font-medium text-xl'>My Order</h2>
<XMarkIcon className="h-6 w-6 text-black cursor-pointer"
onClickCapture={()=>{context.closeProductSideMenu()}}
/>
</div>
<div className='px-6 overflow-y-scroll flex-1'>
{context.cartProducts.map(product => {

  return(
    
  <OrderCars
  key={product.id}
  id={product.id}
  title={product.title}
  imageUrl={product.images[0]}
  price={product.price}
  handleDelete={handleDelete}
  />
  
  )
})}
</div>
<div className='px-6'>
<p className='flex justify-between items-center'>
  <span className='font-light'>Total:</span>
  <span className='font-mediun text-2xl' >${totalPrice(context.cartProducts)}</span>
</p>
<Link to="./my-orders/last" >
<button className='w-full bg-black mt-3 mb-3 py-3 text-red-100 rounded-lg' onClick={()=>{handleCheckout()}} >Checkout</button>

</Link>
</div>

</aside>
)
};