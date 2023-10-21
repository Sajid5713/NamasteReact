import { CDN_URL } from "../utils/constant"

const RestaurantCard = (props) => {
       
    const {resList} = props
    // console.log(props)
    const {cloudinaryImageId,name,cuisines,avgRating} = resList?.info
    const {deliveryTime} = resList?.info?.sla
      return (
          <>
          <div className="res-card">
              <div className="image">
                  <img src={CDN_URL+cloudinaryImageId} alt="restaurant-image" />
              </div>
              <div className="content">
                  <h2 className="title">{name}</h2>
                  <p className="cuisine">{cuisines.join(',')}</p>
                  <h4>{avgRating} ★</h4>
                  <h4>{deliveryTime} minutes</h4>
              </div>
          </div>
          </>
      )
  }

export default RestaurantCard;