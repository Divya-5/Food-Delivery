import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    // searchText is a local state variable 
  const [searchInput, setSearchInput] = useState("KFC"); // to create state variable 
  const searchClicked = false;
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
        <button className="search-btn"> Search</button>
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
