import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import MenuList from './MenuList';

const Menu = () => {
    const{resId} = useParams();
    console.log(resId);
    const[Data,setData] = useState([])
    useEffect(()=>{
        getData();
    },[])
    async function getData(){
      try{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.73390&lng=76.78890&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();      
        

        const  data1 =  (json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        console.log(json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        
      //  console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[2]?.card?.info);
         setData(data1);

      }catch(err){
        console.log(err);
    }
  }
  return (
    <>
 
{ Data && Data.map(data=>(
  <MenuList  data={data} key={data.card?.info?.id}/>
))}
    
    
    </>
  )
}

export default Menu
