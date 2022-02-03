import * as React from "react";
import {
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  // Platform,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";

import styled from "styled-components/native";
// import { Spacer } from "../../../components/spacer/spacer-component";
import RestaurantInfoCard from "../components/restaurant-info.card";
import { SafeArea } from "../../../components/utility/safe-area-component";

// const SafeArea = styled(SafeAreaView)`
//   flex: 1;
//   ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
// `;
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
// const RestaurantListContainer = styled.View`
//   flex: 1;
//   padding: ${(props) => props.theme.space[3]};
// `;
const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      {/* <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer> */}
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
};

export default RestaurantsScreen;
// margin-top: ${StatusBar.currentHeight}px;for android
// ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};for android and IOS
const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   marginTop: StatusBar.currentHeight,
  // },
  // search: {
  //   padding: 16,
  //   // backgroundColor: "green",
  // },
  // list: {
  //   flex: 1,
  //   padding: 16,
  //   backgroundColor: "blue",
  // },
});
