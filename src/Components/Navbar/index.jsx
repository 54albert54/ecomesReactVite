import { ReactComponent as carShop } from "../../icons/carShopping.svg"
import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { ShoooingCartContext } from "../../contex";


  

export const Navbar =()=>{
  const context =useContext(ShoooingCartContext)
let activeStyle= "underline underline-offset-4"

  // let activeStyle={
  //   textDecoration:'underline'
  // }
return(
<nav className="bg-white flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
  <ul className="flex items-center gap-3 ">
    <li className="font-semibold text-lg" >
      <NavLink to='/' 
      className={({isActive}) => isActive? activeStyle:undefined}
      >
        Mi Real Tienda
      </NavLink>
    </li>
    <li>
      <NavLink to='/all'
      className={({isActive}) => isActive? activeStyle:undefined} >
        All
      </NavLink>
    </li>
    <li>
      <NavLink to='/clothes'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Clothes
      </NavLink>
    </li>
    <li>
      <NavLink to='/electronic'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Electronic
      </NavLink>
    </li>
    <li>
      <NavLink to='/furniture'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Furnitures
      </NavLink>
    </li>
    <li>
      <NavLink to='/toys'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Toys
      </NavLink>
    </li>
    <li>
      <NavLink to='/other'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Other
      </NavLink>
    </li>
  </ul>
  <ul className="flex items-center  gap-2" >
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
        My orders
      </NavLink>
    </li>    
    <li>
      <NavLink to='/sign-in'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Sign In
      </NavLink>
    </li>
    <li>
      {carShop}🛒 {context.count}
    </li>

  </ul>
</nav>
)
};