import { useContext, useState, useEffect} from "react";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../context";

const AddToFavourite = () => {
  const { addToFavourites, removeFromFavourites, favourites } = useContext(FavouriteContext);
  const {weatherData} = useContext(WeatherContext);
  const [isFavourite, toggleFavourite] = useState(false);
  const {latitude, longitude, location} = weatherData;

  useEffect(() => {
    const found = favourites.find((fav) => fav.location === location);
    toggleFavourite(found);
  },[])
  
  const handleFavourites = () => {
    const found = favourites.find(fav => fav.location === location);

    if(!found){
      addToFavourites(latitude, longitude, location);
    }else{
      removeFromFavourites(location);
    }
    toggleFavourite(!isFavourite);
  }

    return (
      <div className="md:col-span-2">
        <div className="flex items-center justify-end space-x-6">
          <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourites}>
            <span>{isFavourite? "Remove From Favourite": "Add to Favourite"}</span>
            <img src={isFavourite? RedHeartIcon :HeartIcon } alt="" />
          </button>
        </div>
      </div>
    );
};

export default AddToFavourite;