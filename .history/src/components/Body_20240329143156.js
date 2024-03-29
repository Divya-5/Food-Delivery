const Body = () => {
    return (
        <div className="restaurant-list">
            {restaurantList.map((restaurant) => {
                return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
            })}
        </div>
    );
};
export def