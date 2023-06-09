
import { LayOut } from "../../Components/LayOut";
import { Card } from "../../Components/Card";
import { useEffect } from "react";

import { useState } from "react";
import { ProductsDetails } from "../../Components/ProductsDetails";

export const Home =()=>{
 const [items, setItems] = useState(null)

 useEffect(()=>{
fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(data => setItems(data))

 },[])

return(
<LayOut>
  hola
  <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">

  {
    items?.map((item)=>{
    
    return < Card  key={item.id} data={item}/>
    })
  }
  </div>
 
  <ProductsDetails/>
</LayOut>
)
};