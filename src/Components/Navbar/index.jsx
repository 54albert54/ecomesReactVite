import { ReactComponent as CarShop } from "../../icons/carShopping.svg"
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
    <li
    
     className="font-semibold text-lg" >
      <NavLink to='/' 
      className={({isActive}) => isActive? activeStyle:undefined}
      >
        Mi Real Tienda
      </NavLink>
    </li>
    <li onClick={()=>{ context.setSearcedByCategori("All"), context.setUbicacion("All")}} >
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
        My orderS
      </NavLink>
    </li>    
    <li>
      <NavLink to='/sign-in'
      className={({isActive}) => isActive? activeStyle:undefined} >
        Sign In
      </NavLink>
    </li>
    <li className=" flex">
      <CarShop/>   <p> {context.count}</p>  
    </li>

  </ul>
</nav>
)
};