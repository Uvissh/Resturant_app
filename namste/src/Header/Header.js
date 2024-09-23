import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import store from '../utils/store'
import  "./Header.css"

const Header = () => {
  const cartItems = useSelector(store=>store.cart.items);
  return (
   <>
   <div className='Header'>
   
   <Link to="/"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOV6Q3CbcNCDb35056ZvW-5wLamhd5qxGpRA&s'  className="icon"alt='icon'></img></Link>
   <ul>
   <Link to="/"><li>Home</li></Link>
 <Link to="/cart" >cartItems:{cartItems.length} </Link>
 </ul>
   </div>
   </>
  )
}

export default Header
