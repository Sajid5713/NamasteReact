import React, {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components//RestaurantMenu";
import Grocery from "./components/Grocery";

   const AppLayout = () => {
    return (
        <>
            <Header/>
            {/* <Body/> */}
            <Outlet/>
            <Footer/>
        </>
        
    )
   }

   const appRoutes = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children: [
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/grocery',
                element:<Grocery/>
            },
            {
                path:'/restaurant/:resId',
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    },
    
   ])
            
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <StrictMode>
        <RouterProvider router={appRoutes}/>
    </StrictMode>
);