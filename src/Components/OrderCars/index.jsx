import { XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { ReactComponent as PlusIcon } from "../../icons/pluss.svg"
import { ReactComponent as LessIcon } from "../../icons/minius.svg"
import { ReactComponent as RestarIcon } from "../../icons/restar.svg"
import "./style.css"




export const OrderCars = ({ id,title,imageUrl, price,handleDelete }) =>{
  const [newPrice,setNewPrice] =useState(price)
  const [quantity, setQuantity]=useState(1)
  const moreItem =()=>{sumarprecio()}
  const lessItem =()=>restarprecio()
  const resetItem =()=>{setQuantity(1),setNewPrice(price)}
  let result = price
  
  const sumarprecio=()=>{   
    setQuantity(quantity+1)
    result = (quantity +1) * price
    setNewPrice(result)
    
  } 
  const restarprecio=()=>{   
    if (quantity >1){
    setQuantity(quantity-1)
    result = (quantity -1) * price
    setNewPrice(result)}
    
  } 
  let renderXMarIcon
  if (handleDelete){
    renderXMarIcon =<p className='boton boton--cerrar boton-active'
    onClick={()=>(handleDelete(id))}
    ><XMarkIcon className="h-6 w-6 text-black cursor-pointer"/></p>
  }

 return(
  <div className='card'>
<div className=" flex justify-between items-center">
  <div className='flex items-center gap-2 mb-3'>
    
    <figure className='w-20 h-20'>
      <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
    </figure>
    <p className='text-sm font-light'>{title}</p>
  </div>
  <div className='flex items-center gap-2' >
    <p>{quantity>0?`Qty ${quantity}`:""}</p>
    <p className='text-lg font-medium'> {newPrice}</p>
    {renderXMarIcon}
  </div>
  
</div>
<div className='flex pb-2'>
      <p className="boton boton-active" onClick={()=>{moreItem()}}>
      <PlusIcon  />
      </p>
      <p className={`boton ${quantity>1?"":'boton--fn boton-active'}`}  onClick={()=>{lessItem()}} >
        <LessIcon /></p>
      <p className={`boton ${quantity>1?"":'boton--fn boton-active'}`} onClick={()=>{resetItem()}} > <RestarIcon/></p>
    </div>
</div>
)
};

