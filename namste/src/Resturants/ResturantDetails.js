import React from 'react'
import { IMG_SRC } from '../Constant'
import "./Resturant.css"
import { Link } from 'react-router-dom'


const ResturantDetails = ({data}) => {
    //cloudinaryImageId,name,cuisines,area,lastMileTravelString,costForTwoString,avgRating
  return (
<>

   
      <Link  to ={`/resturant/${data.id}`}>
      <div className='details'>
        
    <img  className="image"src={IMG_SRC+data.cloudinaryImageId} alt='icon' />

            <h1 className='name'>{data.name}</h1>
            <h4 className='cusine'>{data.cuisines.join(",")}</h4>
              <h4 className='area'>{data.area}</h4>
              <span>
                <h4>
                  <i className="rating"></i>
                  {data.avgRating}
                </h4>
                <h4>{data.lastMileTravelString}</h4>
                <h4>{data.costForTwoString}</h4>
                </span>
                </div>
                </Link>
            
            
        
        
       </>
    

  )
}

export default ResturantDetails
