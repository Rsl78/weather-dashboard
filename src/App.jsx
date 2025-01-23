import Page from "./components/Page";
import {
  FavouriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

export default function App() {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
}
