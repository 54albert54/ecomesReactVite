import { createContext, useEffect, useState } from "react";


export const ShoooingCartContext = createContext()

export const initializeLocalStorage = ()=>{
  const accountInlocalStorage = localStorage.getItem('account')
  const signOutInlocalStorage = localStorage.getItem('sign-out')
  let parsedAccount
  let parsedSignOut

  if (!accountInlocalStorage){
    localStorage.setItem('account',JSON.stringify({}))
    parsedAccount ={}
  }else{
    parsedAccount = JSON.parse(accountInlocalStorage)
  }
  if (!signOutInlocalStorage){
    localStorage.setItem('sign-out', JSON.stringify(false))
    parsedSignOut = false
  }else{
    parsedSignOut = JSON.parse(signOutInlocalStorage)
  }
}

export const ShoppingCardProvider =({children})=>{
  const [account, setAccount]=useState({})
  const [signOut , setSignOut]=useState(false)

  const [checkedIndex, setCheckedIndex] = useState(null);

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
  let result = items?.filter(item =>item.category.name.toLowerCase().includes(searcedByCategori.toLowerCase()))
  
  
  return  result
  
  }
  

  const filterBy = (searchType, items, searchByTitle, searcedByCategori) => {
    if (searchType === 'BY_TITLE') {
      return filteredByTitle(items, searchByTitle)
    }

    if (searchType === 'BY_CATEGORY') {
      return filteredByCategori(items, searcedByCategori)
    }

    if (searchType === 'BY_TITLE_AND_CATEGORY') {
      return filteredByCategori(items, searcedByCategori).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    if (!searchType) {
      return items
    }
  }

  useEffect(() => {
    if (searchByTitle && searcedByCategori) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searcedByCategori))
    if (searchByTitle && !searcedByCategori) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle,searcedByCategori))
    if (!searchByTitle && searcedByCategori) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searcedByCategori))
    if (!searchByTitle && !searcedByCategori) setFilteredItems(filterBy(null, items, searchByTitle, searcedByCategori))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items,searchByTitle,searcedByCategori])


  


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
    setUbicacion,
    checkedIndex, 
    setCheckedIndex,
    account, 
    setAccount,
    signOut, 
    setSignOut
    

    }}>
    {children}
  </ShoooingCartContext.Provider>
)
}