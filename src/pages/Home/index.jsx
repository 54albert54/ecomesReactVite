
import { LayOut } from "../../Components/LayOut";
import { Card } from "../../Components/Card";
import { useContext} from "react";


import { ProductsDetails } from "../../Components/ProductsDetails";
import { ShoooingCartContext } from "../../contex";

export const Home =()=>{
  const context = useContext(ShoooingCartContext)
 
const renderItems = ()=>{

if (context.filteredItems?.length>0){
return(
  context.filteredItems?.map((item)=>{
    return < Card  key={item.id} data={item}/>
    }))
}else{
return(
  <div className="alerta flex justify-between items-center mb-3 border rounded-lg p-4 w-80" >No hay!!</div>
)

}

}

return(
<LayOut>
  <div className="flex items-center justify-center relative w-80 mb-4">
 <h1 className="font-medium text-xl">{context.ubicacion}</h1>
 </div>
 <input className="rounded-lg border border-black w-80 p-2 mb-4 focus:outline-none"
  type="text" placeholder="Que quieres encontrar"
  onChange={(e)=>{context.setSearchByTitle(e.target.value)}} />
  <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
{renderItems()}

  </div>
 
  <ProductsDetails/>
</LayOut>
)
};