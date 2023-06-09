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

export const AppRoutes =()=>{
  let routes = useRoutes([
    {path:'/',element:<Home/>},
    {path:'/my-account',element:<MyAccount/>},
    {path:'/my-order',element:<MyOrder/>},
    {path:'/my-orders',element:<MyOrders/>},
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
      </BrowserRouter>
    </ShoppingCardProvider>
 
  )
}

export default App

