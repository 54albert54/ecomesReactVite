import { XMarkIcon } from '@heroicons/react/24/solid'



import  './style.css'
import { useContext } from 'react';
import { ShoooingCartContext } from '../../contex';




export const ProductsDetails =()=>{
  const context = useContext(ShoooingCartContext)

return(
<aside className={`${context.isProductDetailOpen?'flex':'hidden'} product-detail  flex-col fixed right-0 border border-black rounded bg-white`}>
<div className='flex justify-between items-center p-6'>
<h2 className='font-medium text-xl'>Details</h2>
<XMarkIcon className="h-6 w-6 text-black cursor-pointer"
onClickCapture={()=>{context.closeProductDetail()}}
/>
</div>
<figure className='px-6'>
<img className='w-full h-full  rounded-lg ' src={context.productToShow.images?context.productToShow.images[0]:NaN} />
</figure>
<p className='flex flex-col p-6'>
  <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
  <span className='font-medium text-md mb-1' >{context.productToShow.title}</span>
  <span className='font-light text-sm' >{context.productToShow.description}</span>
</p>



</aside>
)
};

