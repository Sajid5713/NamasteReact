import { restaurantList } from "../utils/dataList";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { resList } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {

    const [RestaurantList , setRestaurantList] = useState([]);
    const [filterResList, setfilterResList] = useState([]);
    const [searchText,setsearchText] = useState("");
    
    useEffect(()=>{
           fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilterResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       }

    // if(RestaurantList == 0) {
    //     return ( 
    //         <>
    //          <div className="container">
    //             <div className="search-bar">
    //                 <form method="">
    //                     <input type="text" className="textbox" placeholder="Search" style={{background:'#cfcfcf96'}} />
    //                     <input title="Search" value="⌕" type="submit" className="button" />
    //                 </form>
    //             </div>
    //             <div className="filter-nav">
    //                 <button className="btn">Top Rated ★</button>
    //             </div>
    //             <div className="res-container">
    //                 <Shimmer/>  
    //                 <Shimmer/>  
    //                 <Shimmer/>  
    //                 <Shimmer/>  
    //                 <Shimmer/>  
    //                 <Shimmer/>  
    //                 <Shimmer/>  
    //                 <Shimmer/>  
    //                 <Shimmer/>
    //                 <Shimmer/>  
    //             </div>
    //          </div>
         
    //         </>
    //     );
    // }

    /* OR
        RestaurantList.length === 0 ? (<Shimmer/>) : ( <> Component_Code </>)
    */

    return RestaurantList.length === 0 ? (<Shimmer/>) : (
        <>
        <div className="container">
        <div className="search-bar">
            <div className="form">
                <input type="text" className="textbox" placeholder="Search" value={searchText}
                onChange={(e)=>{setsearchText(e.target.value)}} />
                <input title="Search" value="⌕" type="submit" className="button"
                onClick={()=>{
                    console.log(searchText);
                    const filteredList = RestaurantList.filter((res)=>{
                        return ( res.info.name.toLowerCase().includes(searchText.toLowerCase()) )
                    })
                    
                    setfilterResList(filteredList);
                }} />
            </div>
        </div>

        <div className="filter-nav">
            <button 
            className="btn" 
            onClick={ () => { 
                const filteredList = RestaurantList.filter(
                    (res) => res.info.avgRating > 4                
                );
                setRestaurantList(filteredList);
                // console.log(filteredList);
                }     
            }>
            Top Rated ★
            </button>
        </div>

        <div className="res-container">
           {filterResList.map((restaurant) => {
            return (
                <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                    <RestaurantCard resList={restaurant}  />
                </Link>
            )
           })}
        </div>
        </div>
       
        </>
    )
}

export default Body;