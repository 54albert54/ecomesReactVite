import { ReactComponent as CarShop } from "../../icons/carShopping.svg"
import { ReactComponent as HomeIcon } from "../../icons/Home.svg"
import { ReactComponent as Menu } from "../../icons/menu.svg"
import { NavLink } from "react-router-dom";

import { useContext, useState } from "react";
import { ShoooingCartContext } from "../../contex";
import { ShoooingCart } from "../ShoppingCart";





  

export const Navbar =()=>{
  const [clase,setClase] = useState("invisible")
  const context =useContext(ShoooingCartContext)
let activeStyle= "underline underline-offset-4"

//Sign Out
const signOut = localStorage.getItem('sign-out')
const parsedSignOut = JSON.parse(signOut)
const isUserSignOut = context.signOut || parsedSignOut
//Account 
const account = localStorage.getItem('account')
const parsedAccount = JSON.parse(account)
//has an account 
const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
const noAccountInLocalState = context.account ? Object.keys(context.account).length === 0 : true
const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState

const handleSignOut =()=>{
  const stringfiedSignOut = JSON.stringify(true)
  localStorage.setItem('sign-out', stringfiedSignOut)
  context.setSignOut(true)
  }

  const renderView = () => {
    if (hasUserAnAccount && !isUserSignOut) {
      return (
        <>
          <li className='text-black/60'>
            {parsedAccount?.email}
          </li>
          <li>
            <NavLink
              to='/my-orders'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/my-account'
              className={({ isActive }) => isActive ? activeStyle : undefined}>
              My Account
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/sign-in'
              className={({ isActive }) => isActive ? activeStyle : undefined}
              onClick={() => handleSignOut()}>
              Sign out
            </NavLink>
          </li>
        </>
      )
    } else {
      return (
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => isActive ? activeStyle : undefined }
            onClick={() => handleSignOut()}>
            Sign in
          </NavLink>
        </li>
      )
    }
  }

return(

<nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
<div className="navbar-izquierda" >
  <ul className=" flex items-center gap-3 ">
    <li
    onClick={()=>{  context.setUbicacion("Mi Real Tienda")}}
     className="font-semibold text-lg" >
      <NavLink to='/' 
      className={({isActive}) => isActive? activeStyle:undefined}
      >
        <HomeIcon/>
      </NavLink>
    </li>
    <li onClick={()=>{ context.setSearcedByCategori(null), context.setUbicacion("All")}} >
      <NavLink to='/all'
      className={({isActive}) => isActive? activeStyle:undefined} >
        All
      </NavLink>
    </li>
    <li onClick={()=>{ context.setSearcedByCategori("Clothes"), context.setUbicacion("Clothes")}}>
      <NavLink to='/clothes'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Clothes
      </NavLink>
    </li>
    <li onClick={()=>{ context.setSearcedByCategori("Electronic"), context.setUbicacion("Electronic")}} >
      <NavLink to='/electronic'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Electronic
      </NavLink>
    </li>
    <li onClick={()=>{ context.setSearcedByCategori("Furniture"), context.setUbicacion("Furniture")}} >
      <NavLink to='/furniture'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Furnitures
      </NavLink>
    </li>
    <li onClick={()=>{ context.setSearcedByCategori("Toys"), context.setUbicacion("Toys")}} >
      <NavLink to='/toys'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Toys
      </NavLink>
    </li>
    <li onClick={()=>{ context.setSearcedByCategori("Other"), context.setUbicacion("Other")}} >
      <NavLink to='/other'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Other
      </NavLink>
    </li>
    <li className="boton--menu" onClick={()=>{clase === "invisible"? setClase(''):setClase('invisible')}}>
      <Menu/> 
    </li>
  </ul>
  </div>

  <ul className={`navbar-derecha flex items-center menu  gap-2`} >
  {renderView()}
<li className="flex items-center" onClick={()=>context.isProductDitailMenuOpen?context.closeProductSideMenu():context.openProductSideMenu() }>
  <ShoooingCart/>
</li>
  </ul>
</nav>
)
};