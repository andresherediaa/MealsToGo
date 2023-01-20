import React, { useState, useContext, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "./../../../services/location/location.context";
import { View } from "react-native";

const SearchContainer = styled(View)`
  padding: 8px;
`;

export const Search = ({ isToggleFavourites, onToggleFavourites }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        icon={isToggleFavourites ? "heart" : "heart-outline"}
        placeholder="Search for a Location"
        onChangeText={(text) => setSearchKeyword(text)}
        onSubmitEditing={() => search(searchKeyword)}
        value={searchKeyword}
        onIconPress={() => onToggleFavourites()}
      />
    </SearchContainer>
  );
};
