import { useContext } from "react";
import { ShoooingCartContext } from "../../contex";
import { ReactComponent as PlusIcon } from "../../icons/pluss.svg"
export const Card =(data)=>{
  const context =useContext(ShoooingCartContext)

  const showProduct = (productDetail)=>{
    context.openProductDetail()
    context.setTroductToShow(productDetail)
  }

const addProductsToCard =(productDeta)=>{
  context.setCount(context.count +1)
context.setCarProducts([...context.cartProducts, productDeta])
console.log(context.cartProducts)
}

return(
<div
onClick={()=>{showProduct(data.data)}}
 className="bg-white cursor-pointer w-56 h-60 rounded-lg">
  <figure className="relative mb-3 w-full h-4/5 ">
    <span className="absolute  bottom-0 left-0 m-2 bg-white/60 rounded-lg text-black text-xs  px-3 py-0.5">{data.data.category.name}</span>
    <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
    <div 
    className="absolute top-0 right-0 flex justify-center m-2 items-center bg-white w-6 h-6 rounded-full"
    onClick={()=>{addProductsToCard(data.data)}} >
      <PlusIcon /></div>
  </figure>
  <p className="flex justify-between">
    <span className="text-sm font-light" >{data.data.title}</span>
    <span className="text-sm font-medium" >${data.data.price}</span>
  </p>
</div>
)
};