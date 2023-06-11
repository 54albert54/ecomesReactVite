import { useContext } from "react";
import { ShoooingCartContext } from "../../contex";
import { ReactComponent as PlusIcon } from "../../icons/pluss.svg"
import { ReactComponent as CheckIcon } from "../../icons/check.svg"


 const Card =(data)=>{
  
  const context =useContext(ShoooingCartContext)

  const showProduct = (productDetail)=>{
   
    context.setTroductToShow(productDetail),

    context.closeProductSideMenu()
    context.openProductDetail()
    
  }

const addProductsToCard =(event, productDeta)=>{
  event.stopPropagation()
 
  context.setCount(context.count +1)
context.setCarProducts([...context.cartProducts, productDeta])
context.openProductSideMenu()
context.closeProductDetail()
}


 const renderIcon =(id)=>{

  const isInCart = context.cartProducts.filter(product => product.id === id ).length >0


if (isInCart){
  
  return(
    <div 
    className="absolute top-0 right-0 flex justify-center m-2 items-center bg-black w-6 h-6 rounded-full"
     >
      <CheckIcon  fill='gray' />
    </div>
  )
}else{
  
  return(

  <div 
  className="absolute top-0 right-0 flex justify-center m-2 items-center bg-white w-6 h-6 rounded-full"
  onClick={(event)=>{addProductsToCard(event, data.data)}} >
    
    <PlusIcon />
  </div>)
}
};
return(
<div 
onClick={()=>{showProduct(data.data)}}
 className={`bg-white cursor-pointer w-56 h-60 rounded-lg card `}>
  <figure className="relative mb-3 w-full h-4/5 ">
    <span className="absolute  bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs  px-3 py-0.5">{data.data.category.name}</span>
    <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
{renderIcon(data.data.id)}
  </figure>
  <p className="flex justify-between">
    <span className="text-sm font-light" >{data.data.title}</span>
    <span className="text-sm font-medium" >${data.data.price}</span>
  </p>
</div>
)
};

export {  Card  }