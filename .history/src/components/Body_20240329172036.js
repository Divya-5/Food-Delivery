import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData





const Body = () => {
    // searchText is a local state variable 
    const [searchInput, setSearchInput] = useState("KFC"); // to create state variable 
    // const [searchClicked, setSearchClicked] = useState("false"); // to create state variable 
    const [restaurant, setRestaurant] = useState(restaurantList);
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={() => {
                    //need to filter the data 
                    // update the state-  restaurant variable 
                    filterData();
                }
                }> Search</button>
            </div>
            <div className="restaurant-list">
                {restaurantList.map((restaurant) => {
                    return (
                        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                })}
            </div>
        </>
    );
};
export default Body;
