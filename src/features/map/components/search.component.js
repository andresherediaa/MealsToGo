import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "./../../../services/location/location.context";
import { View } from "react-native";

const SearchContainer = styled(View)`
  padding: 8px;
  position: absolute;
  top: 20px;
  width: 100%;
  z-index: 999;
`;

export const Search = () => {
  const { keyword, search, location } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        placeholder="Search for a Location in map"
        icon="map"
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
        value={searchKeyword}
      />
    </SearchContainer>
  );
};
