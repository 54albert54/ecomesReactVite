import { ReactComponent as CarShop } from "../../icons/carShopping.svg"
import { ReactComponent as HomeIcon } from "../../icons/Home.svg"
import { ReactComponent as Menu } from "../../icons/menu.svg"
import { NavLink } from "react-router-dom";

import { useContext, useState } from "react";
import { ShoooingCartContext } from "../../contex";





  

export const Navbar =()=>{
  const [clase,setClase] = useState("invisible")
  const context =useContext(ShoooingCartContext)
let activeStyle= "underline underline-offset-4"

  // let activeStyle={
  //   textDecoration:'underline'
  // }
return(

<nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
<div className="navbar-izquierda" >
  <ul className=" flex items-center gap-3 ">
    <li
    onClick={()=>{  context.setUbicacion("Mi Real Tienda")}}
     className="font-semibold text-lg" >
      <NavLink to='/Mi-React-Tienda' 
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

  <ul className={`navbar-derecha flex items-center menu ${clase} gap-2`} >
    <li className="text-black/60" >
     rompreCraneos809
    </li>
    <li>
      <NavLink to='/my-account'
      className={({isActive}) => isActive? activeStyle:undefined} >
        My Account
      </NavLink>
    </li>
    <li>
      <NavLink to='/my-orders'
      className={({isActive}) => isActive? activeStyle:undefined} >
        My order
      </NavLink>
    </li>    
    <li>
      <NavLink to='/sign-in'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Sign In
      </NavLink>
    </li>
    <li onClick={()=>context.isProductDitailMenuOpen?context.closeProductSideMenu():context.openProductSideMenu() } className=" flex">
      <CarShop/>   <p> {context.cartProducts.length}</p>  
    </li>

  </ul>
</nav>
)
};