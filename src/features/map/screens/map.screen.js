import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";
import { Marker, Callout } from "react-native-maps";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { LocationContext } from "../../../services/location/location.context";
import { MapCallout } from "../components/map-callout.component";
import { Text } from "../../../components/typography/text.component";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RestaurantMap = ({ navigation }) => {
  const { restaurants = [] } = useContext(RestaurantContext);
  const [latDelta, setLatDelta] = useState(0);
  const {
    geometry: {
      location: { lat, lng },
      viewport,
    },
  } = restaurants[0];
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [restaurants, viewport]);

  return (
    <SafeArea>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.06,
        }}
      >
        {restaurants &&
          restaurants.map((restaurant) => {
            const { lat, lng } = restaurant.geometry.location;
            return (
              <Marker
                key={restaurant.placeId}
                title={restaurant.name}
                coordinate={{
                  latitude: lat,
                  longitude: lng,
                }}
              >
                <Callout
                  onPress={() =>
                    navigation.navigate("RestaurantDetailed", { restaurant })
                  }
                >
                  <MapCallout restaurant={restaurant} />
                </Callout>
              </Marker>
            );
          })}
      </Map>
    </SafeArea>
  );
};

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantContext);

  if (!location || !restaurants.length) {
    return (
      <Map
        region={{
          latitude: 0,
          longitude: 0,
        }}
      />
    );
  }
  return <RestaurantMap navigation={navigation} />;
};
