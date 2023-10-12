import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Logo from "./img/logo.png"
import { restaurantList } from './dataList'

    const Header = () => {
        return (
            <div className="header">
                    <div className="logo">
                        <a href="/">
                            <img className="logo" src={Logo} alt="Logo" style={{width:"120px"}} />
                        </a>
                    </div>
                    <div className="navigation">
                        <ul className="nav-items">
                            <li><a href="">Home</a></li>
                            <li><a href="">About</a></li>
                            <li><a href="">Contact</a></li>
                            <li><a href="">Cart</a></li>
                        </ul>
                    </div>
            </div>
            
        )
    }


    const Body = () => {
        return (
            <>
            <div className="search-bar">
            <form method="">
                <input type="text" className="textbox" placeholder="Search" />
                <input title="Search" value="⌕" type="submit" className="button" />
            </form>
            </div>

            <div className="res-container">
               {restaurantList.map( (restaurant) => {
                return (
                    <ResCardLayout resList={restaurant} key={restaurant.info.id}/>
                )
               })}
            </div>
            </>
            
            
        )
    }


    const ResCardLayout = (props) => {
       
      const {resList} = props
    //   console.log(props)
      const {cloudinaryImageId,name,cuisines,avgRating} = resList?.info
      const {deliveryTime} = resList?.info?.sla
        return (
            <>
            <div className="res-card">
                <div className="image">
                    <img src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId} alt="restaurant-image" />
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


    const Footer = () => {
        return (
            <>
            <div className="footer">
                <div className="copyrights">
                        <span className="copyright-text">© 2023 GrillHouse. All Rights Reserved.</span>
                </div>
            </div>
               
            </>
        )
    }

   const AppLayout = () => {
    return (
        <>
        <Header/>
        <Body/>
        <Footer/>
        </>
        
    )
   }
            
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);