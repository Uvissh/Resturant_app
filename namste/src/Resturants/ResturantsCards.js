import React, { useEffect, useState } from 'react';
import ResturantDetails from './ResturantDetails';
import { Link } from 'react-router-dom';
import "./Resturant.css";
const ResturantsCards = () => {
    const [Data, setData] = useState({});
    const [Data1, setData1] = useState([]);
    const [loading, setLoading] = useState(true);
    const[Text,searchText] = useState("");


     function filterData(searchText,restaurants){
      const filterData1 = restaurants.filter((restaurant)=>
            restaurant?.info.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData1; 
  
  
  }
  
    useEffect(() => {
      getData();
    }, []);
    async function getData() {
        try {
          const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.73390&lng=76.78890&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
          const json = await data.json();
          console.log('Fetched data:', json);
      
          const restaurants = json?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          console.log('Parsed restaurants:', restaurants); // Add this logging statement
      
          setData([restaurants]);
          setData1(restaurants);
          setLoading(false);
        } catch (err) {
          console.log(err);
          setLoading(false);
        }
      }
  
    return (
      <>


      <div className='container'>
        <input
        type='text'
        className='serachText'
        placeholder='Enter your wish'
        onChange={(e)=> searchText(e.target.value)
        }
        value={Text}>
          
        
        
        </input>
        <button
         className='ButtonSearch'
         onClick={()=>{
         const data= filterData(Text,Data);
          setData1(data)
         }}>
          search
        </button>
      </div>



        <div className='RestuarntsCards'>
          <div className='Resturant'>
            {Data1 && Data1.map((data,index)=>{
              return(
                <ResturantDetails data={data.info}  key={data.info.id} />



              )

            })}
            </div>
            </div>
          
            
      </>
    );
  }

export default ResturantsCards;
