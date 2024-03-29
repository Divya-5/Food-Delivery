export const RestaurantCard = ({
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