import { useContext, useEffect, useState } from "react";
import Header from "./header/Header";
import WeatherBoard from "./weather/WeatherBoard";
import { WeatherContext } from "../context";

import ClearSkyImage from "../assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "../assets/backgrounds/few-clouds.jpg";
import MistImage from "../assets/backgrounds/mist.jpeg";
import RainyDayImage from "../assets/backgrounds/rainy-day.jpg";
import ScatteredCloudesImage from "../assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "../assets/backgrounds/snow.jpg";
import ThunderstormImage from "../assets/backgrounds/thunderstorm.jpg";
import WinterImage from "../assets/backgrounds/winter.jpg";

const Page = () => {
  const { weatherData, loading } = useContext(WeatherContext);
  const { climate } = weatherData;

  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatteredCloudesImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderstormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  useEffect(() => {
    const bgImage = getBackgroundImage(climate);
    setClimateImage(bgImage);
  }, [climate]);

  return (
    <>
      {loading.state ? (
        <div>
          <p>{loading.message}</p>
        </div>
      ) : (
        <div
        style = {{backgroundImage: `url('${climateImage}')`}} 
        className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;
