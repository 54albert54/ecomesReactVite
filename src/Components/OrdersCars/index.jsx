 import { ChevronRightIcon } from '@heroicons/react/24/solid'
// import { useState } from 'react';
// import { ReactComponent as PlusIcon } from "../../icons/pluss.svg"
// import { ReactComponent as LessIcon } from "../../icons/minius.svg"
// import { ReactComponent as RestarIcon } from "../../icons/restar.svg"

// import "./style.css"


export const OrdersCars = props =>{
  const {totalPrice, totalProducts} = props
 
return(
<div className="card flex justify-between items-center mb-3 border rounded-lg p-4 w-80">
  <div className="flex justify-between w-full">
    <p className="flex flex-col">
    <span className="font-light mb-2 mt-2">01.02.2023</span>
    <span className="font-light">{totalProducts} items</span>
    </p>
    <p className='precio-flecha'>
    
    <span className="font-medium text-2Xl">${totalPrice} </span>
    <ChevronRightIcon className='font-medium text-2xl'/>
    </p>
  </div>
</div>
)
};


