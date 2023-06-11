import {useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCardProvider } from '../contex'

import './App.css'
 import { Home } from './Home'
import {MyAccount} from './MyAccount'
import { MyOrder } from './MyOrder'
import { MyOrders } from './MyOrders'
import { NotFound } from './NotFound'
import { Signin } from './Signin'
import { Navbar } from '../Components/Navbar'
import { CheckoutSideMenu } from '../Components/CheckoutSideMenu'
import { Inicio } from './inicio'

//import { totalPrice } from '../utils/index'




export const AppRoutes =()=>{
  let routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/Mi-React-Tienda',element:<Inicio/>},
    {path:'/All',element:<Home/>},
    {path:'/Clothes',element:<Home/>},
    {path:'/electronic',element:<Home/>},
    {path:'/furniture',element:<Home/>},
    {path:'/toys',element:<Home/>},
    {path:'/other',element:<Home/>},
    {path:'/my-account',element:<MyAccount/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/my-orders',element:<MyOrders/>},
    {path:'/my-orders/last',element:<MyOrder/>},
    {path:'/my-orders/:id',element:<MyOrder/>},
    {path:'/*',element:<NotFound/>},
    {path:'/sign-in',element:<Signin/>},
   
    
  ])
return(
routes
)
};



function App() {
  

  return (
    <ShoppingCardProvider>
      
      <BrowserRouter>
        <AppRoutes/>  
        <Navbar/>
        <CheckoutSideMenu/>
      </BrowserRouter>
    </ShoppingCardProvider>
    
 
  )
}

export default App

