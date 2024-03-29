import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData() {

}





const Body = () => {
    // searchText is a local state variable 
    const [searchText, setSearchText] = useState("KFC"); // to create state variable 
    // const [searchClicked, setSearchClicked] = useState("false"); // to create state variable 
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button className="search-btn" onClick={() => {
                    //need to filter the data 
                    const data = filterData(searchText, restaurants);
                     // update the state-  restaurant variable 
                     

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
