import React from 'react'
import './CartStore.css'
import { IMG_SRC } from '../Constant';

const CartStore = ({item}) => {
    console.log(item);
  return (
   <>
   <div className='Cards'>
   <div className='CartItems'>
  <img  className ="IMG"src= {item?IMG_SRC+item.imageId:""} alt='path'/>
  <h1 className='cartTitle'>{item.name}</h1>
  <h2 className='cartprice'> Ruppees:{item.price/100}/</h2>
  </div>

  </div> 
    </>
  )
}

export default CartStore
