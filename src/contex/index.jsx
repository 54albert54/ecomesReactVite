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
 
  //Categry
  const [searcedByCategori , setSearcedByCategori]= useState(null)
  console.log(" searcedByCategori : ",searcedByCategori)
  
 

  // cabezera de pagina
  const [ubicacion , setUbicacion] =useState('Mi Real tienda ')
  


  useEffect(()=>{
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(response => response.json())
    .then(data => setItems(data))
    
     },[])

const filteredByTitle = (items , searchByTitle)=>{
return  items?.filter(item =>item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
}

const filteredByCategori = (items,searcedByCategori)=>{
  let result = items?.filter(item =>item.category.name == searcedByCategori)
  
  
  return  result
  
  }
  

  const   filterBy = (searchType,items ,searchByTitle,searcedByCategori)=>{
   console.log("items :",items)
    
    if (searchType === 'By_TITLE_AND_CATEGORY'){
      return filteredByCategori(items , searcedByCategori).filter(item =>item.category.name.toLowerCase() === searcedByCategori.toLowerCase())
    }
    if (searchType === 'By_TITLE'){
      return filteredByTitle(items , searchByTitle)
    }
    if (searchType === 'By_CATEGORY'){
      return filteredByCategori(items , searcedByCategori)
    }
    if (!searchType ){
      return items 
    }
   
   
  
  }
 
  console.log("filteredItems: ", filteredItems)
useEffect(()=>{

 
  if (searchByTitle && searcedByCategori)setFilteredItems(filterBy('By_TITLE_AND_CATEGORY',items ,searchByTitle)),console.log("items- ambos: ",items)
  if (searchByTitle && !searcedByCategori)setFilteredItems(filterBy('By_TITLE',items ,searchByTitle)),console.log("items- titulo: ",items)
  if (!searchByTitle && searcedByCategori)setFilteredItems(filterBy('By_CATEGORY',items ,searcedByCategori)),console.log("items- hooks: ",items)
  if (!searchByTitle && !searcedByCategori)setFilteredItems(filterBy(null,items ,searcedByCategori)),console.log("nadie",items)
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[items , searchByTitle,searcedByCategori])


// const filteredByCategori = ()=>{
//   const result =  items?.filter(item =>item.category.name ==="Clothes")
//   setItemsByCategory(result)
//   }

  


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
    setFilteredItems,
    searcedByCategori,
    setSearcedByCategori,
    filteredByCategori,
    ubicacion,
    setUbicacion
    

    }}>
    {children}
  </ShoooingCartContext.Provider>
)
}