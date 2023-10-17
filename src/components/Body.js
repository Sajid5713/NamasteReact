import { restaurantList } from "../utils/dataList";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [RestaurantList , setRestaurantList] = useState(restaurantList);
    // let listOfRes =  [
    //     {
    //         info: {
    //             id: "235625",
    //             name: "KFC",
    //             cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    //             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //             avgRating: 3.9,
    //             sla: {
    //                 deliveryTime: 24,
    //             },
    //         },
    //     },
    //     {
    //         info: {
    //             id: "235626",
    //             name: "Monal",
    //             cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    //             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //             avgRating: 4.5,
    //             sla: {
    //                 deliveryTime: 24,
    //             },
    //         },
    //     },
    //     {
    //         info: {
    //             id: "235627",
    //             name: "Cheese and Butter",
    //             cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    //             cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    //             avgRating: 4.2,
    //             avgRatingString: "4.2",
    //             sla: {
    //                 deliveryTime: 24,
    //             },
    //         },
            
    //     }
    // ];

    return (
        <>
        <div className="container">
        <div className="search-bar">
            <form method="">
                <input type="text" className="textbox" placeholder="Search" />
                <input title="Search" value="⌕" type="submit" className="button" />
            </form>
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
           {RestaurantList.map((restaurant) => {
            return (
                <RestaurantCard resList={restaurant} key={restaurant.info.id}/>
            )
           })}
        </div>
        </div>
       
        </>
    )
}

export default Body;