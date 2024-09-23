import React from 'react'
import { IMG_SRC } from '../Constant'

const Resturants1 = (Data) => {
  return (
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
  )
}

export default Resturants1
