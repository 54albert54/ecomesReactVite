import { createContext, useEffect, useState } from "react";


export const ShoooingCartContext = createContext()

export const ShoppingCardProvider =({children})=>{



  //conteo de carrito
  const [count, setCount]= useState(0)

   //Show -Product-Detail open/close
  const [isProductDetailOpen,setIsProductDetailOpen]=useState(false)
  const openProductDetail =()=>{setIsProductDetailOpen(true)}
  const closeProductDetail =()=>{setIsProductDetailOpen(false)}

   //Checkout Side Munu open/close
   const [isProductDitailMenuOpen,setIsProductDitailMenuOpen]=useState(false)
   const openProductSideMenu =()=>{setIsProductDitailMenuOpen(true)}
   const closeProductSideMenu =()=>{setIsProductDitailMenuOpen(false)}
    
  //mostrar producto en la car
  const [productToShow,setTroductToShow]=useState({}) 


  const [cartProducts,setCarProducts] =useState([])

  //send my order to myOrders
  const [order, setOrder] = useState([])

  //los datos de la api
  const [items, setItems] = useState(null)
  //los datos filtrados
  const [filteredItems, setFilteredItems] = useState(null)
  
  // get items by title
  const [searchByTitle , setSearchByTitle]= useState(null)


  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
    
     },[])

const filteredByTitle = (items , searchByTitle)=>{
return  items?.filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
}
useEffect(()=>{
  if (searchByTitle)setFilteredItems(filteredByTitle(items , searchByTitle))
},[items , searchByTitle])



return(
  <ShoooingCartContext.Provider value={{
    count,
    setCount,
    openProductDetail,
    closeProductDetail,
    isProductDetailOpen,
    productToShow,
    setTroductToShow,
    cartProducts,
    setCarProducts,
    isProductDitailMenuOpen,
    openProductSideMenu,
    closeProductSideMenu,
    order,
    setOrder,
    items,
    setItems,
    searchByTitle, 
    setSearchByTitle,
    filteredItems,
    setFilteredItems
    

    }}>
    {children}
  </ShoooingCartContext.Provider>
)
};