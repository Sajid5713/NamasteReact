import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";
import { Link, useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const {resId} = useParams();
    // console.log(resId)
    const [menuList , setmenuList] = useState('dfds');
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
       const data = await fetch(MENU_API + resId);
       const json = await data.json();
       setmenuList(json.data);
    //    console.log(json.data)
    }

    if(menuList === null ) return <Shimmer/>

    const {name,cuisines,areaName,avgRating,city,totalRatingsString,costForTwoMessage} = menuList?.cards[0]?.card?.card?.info;
    const { itemCards } = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    // const { cards } = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    // console.log(menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR)
    // const {itemCards } = menuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    return(
        <div className="container">
            <div className="res-menus">
                <div className="breadcrumbs">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">{name}</Link>
                        </li>
                        <li>
                            <Link to="/">{city}</Link>
                        </li>
                    </ul>
                </div>
                <div className="info-container">
                    <div className="info">
                        <h2>{name}</h2>
                        <p>{cuisines.join(',')}</p>
                        <p>{areaName}</p>
                    </div>
                    <div className="rating">
                        <button className="res-rating">
                            <span className="avgRating">★ {avgRating}</span>
                            <span className="totalRating">{totalRatingsString}</span>
                        </button>
                    </div>
                </div>
                <hr className="RestaurantHeader_dottedSeparator" />
                <div className="restaurantTimeCost">
                    <ul>
                        <li>💰 {costForTwoMessage}</li>
                    </ul>
                </div>
                <hr className="RestaurantHeader_dottedSeparator" />
                <div className="menu">
                    <ul>
                        <h2>{itemCards[0]?.card?.info.category} ({itemCards.length})</h2>
                        
                        {
                            itemCards.map((items)=>{
                              
                                return(     
                                    <li key={items.card.info.id}>
                                        <div className="item-info">
                                            <h3 className="name">{items.card.info.name}</h3>
                                            <p className="price"><del>{items.card.info.price/100}</del>- <span style={{color:"#000"}}>{items.card.info.finalPrice/100}</span></p>
                                            <p className="description">{items.card?.info.description}</p>
                                        </div>
                                        <div className="item-img">
                                            <img className="image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+
                                                items.card.info.imageId} alt="" />
                                                <button className="btn">+</button>
                                        </div>
                                    </li>
                                )
                            })
                        }
                        
                       
                    </ul>
                </div>
            </div>
        </div>
        
    )
}

export default RestaurantMenu;