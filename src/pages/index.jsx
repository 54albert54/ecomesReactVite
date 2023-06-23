import {useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoooingCartContext, ShoppingCardProvider, initializeLocalStorage } from '../contex'

import './App.css'
 import { Home } from './Home'

import { MyOrder } from './MyOrder'
import { MyOrders } from './MyOrders'
import { NotFound } from './NotFound'
import { Signin } from './Signin'
import { Navbar } from '../Components/Navbar'
import { CheckoutSideMenu } from '../Components/CheckoutSideMenu'
import { MyAccount } from './MyAccount'
import { useContext } from 'react'

//import { totalPrice } from '../utils/index'  ecomesReactVite




export const AppRoutes =()=>{
  const context = useContext(ShoooingCartContext)
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)

  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut

  let routes = useRoutes([
    {path:'/',element: hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/ecomesReactVite',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/Mi-React-Tienda',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/All',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/Clothes',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/electronic',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/furniture',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/toys',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/other',element:hasUserAnAccount && !isUserSignOut?<Home/>:<Navigate replace to={'/sign-in'}/>},
    {path:'/my-account',element:<MyAccount/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/my-orders',element:<MyOrders/>},
    {path:'/my-orders/last',element:<MyOrder/>},
    {path:'/my-orders/:id',element:<MyOrder/>},
    {path:'/*',element:<NotFound/>},
    {path:'/sign-in',element:<Signin/>},
    {path:'/ecomesReactVite/sign-in',element:<Signin/>},
    
  ])
return(
routes
)
};



function App() {
  initializeLocalStorage()

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

