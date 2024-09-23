import React from 'react'
import { IMG_SRC } from '../Constant';
import {useDispatch} from "react-redux";
import { addItem,clearCart } from '../utils/cartSlice';
import "./Menu.css";


const MenuList = ({data}) => {
  const dispatch = useDispatch();
  const addfoodItem =(item)=>{
    dispatch(addItem(item));
  }
  
  
    console.log(data);
  return (
    <div>

<span className='name'>{data.card?.info?.name} </span>
<button className='add' onClick={()=>(addfoodItem(data.card?.info))}>Add</button>
{/* <img src={ data && data?IMG_SRC+ data.card?.info?.imageId:""}   alt='icon'></img> */}

    </div>
  )
}

export default MenuList
