import React, { useContext, useEffect, useState} from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { Marker } from "react-native-maps";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
export const MapScreen = () => {
  const { restaurants=[] } = useContext(RestaurantContext);
  const { location } = useContext(LocationContext);
  const { lat, lng, viewport } = location;
  const [latDelta, setLatDelta] = useState(0);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;

    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <SafeArea>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant, index) => {
          const { lat, lng } = restaurant.geometry.location;
          return null; //<Marker key={restaurant.placeId} />;
        })}
      </Map>
    </SafeArea>
  );
};
