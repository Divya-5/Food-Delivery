import React from "react";
import ReactDOM from "react-dom/client";
//import "./index.css";
import Header from "./components/Header"
import Body from "./components/Body";
import Footer from "./components/Footer";
import { IMG_CDN_URL } from "./constants"
/*
> Header
    - logo
    - nav list  
    - cart
> Body
    - Search 
    - Restaurant List
      - Restaurant Card
      - Image
      - Name
      - Rating
      - Cuisines
> Footer
    - links
    - Copyright

*/


const RestaurantCard = ({
    cloudinaryImageId,
    name,
    cuisines,
    lastMileTravel,
}) => {
    //destructing object
    // const { cloudinaryImageId,name, cuisines, lastMileTravel} = restaurant.data;
    return (
        <div className="card">
            <img
                src={
                    IMG_CDN_URL +
                    cloudinaryImageId
                }
            />
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>

            <h4>{lastMileTravel} minutes</h4>
        </div>
    );
};

const AppLayout = () => {
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

