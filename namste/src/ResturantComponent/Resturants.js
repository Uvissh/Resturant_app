import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { IMG_SRC } from '../Constant';
import Resturants1 from './Resturants1';

const Resturants = () => {
  const{resId} = useParams();
  const[Data,setData] = useState([]);
  console.log(resId);
  

   useEffect(()=>{
    async  function getComponent(){
      try{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
        console.log(json?.data?.cards[2]?.card?.card?.info);
        setData(json?.data?.cards[2]?.card?.card?.info);
  
  
      }catch(err){
        console.log(err);
      }
    }
    getComponent();
    
   },[])

 
  return (
   <>
    <div>
           <img src={Data && Data?IMG_SRC+Data.cloudinaryImageId:""}alt='icon'></img>
<h1>{Data && Data?Data.name:""}</h1>

            <h4>{ Data && Data?Data.cuisines:""}</h4>
              <h4>{ Data && Data? Data.area:""}</h4>
              <span>
                <h4>
                  <i className="rating"></i>
                   {Data && Data?Data.avgRating:""}
                </h4>
                <h4>{ Data && Data?Data.lastMileTravelString:""}</h4>
                <h4>{Data &&Data? Data.costForTwoString:""}</h4>
                </span>
      
    </div>
  

  <Menu/>
   </>
  )
}

export default Resturants
