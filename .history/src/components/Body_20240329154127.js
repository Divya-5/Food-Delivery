import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    const [searchText, setsearchText] = useState("KFC)
    return (
        <>
            <div className="search-container">
                <input type="text" className="search-input" placeholder="Search" value={searchText} />
                <button className="search-btn"> Search</button>
            </div>
            <div className="restaurant-list">
                {restaurantList.map((restaurant) => {
                    return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
                })}
            </div>
        </>

    );
};
export default Body;