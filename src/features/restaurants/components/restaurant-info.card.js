// import { Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native";

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `;
const Title = styled.Text`
  color: ${(props) => props.theme.colors.ui.primary};
  padding: 16px;
`;
const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;
const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant Name",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/easter-breakfast-of-fried-quail-eggs-on-bread-with-butter-1.jpg",
    ],
    address = "100 Some Randome Street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={10} style={styles.card}>
      <RestaurantCardCover
        key={name}
        // style={styles.cover}
        source={{
          uri: photos[0],
        }}
      />
      <Title>{name}</Title>
      {/* <Text style={styles.title}>{address}</Text>
      <Text style={{ color: "blue" }}>{rating}</Text>
      <Title>{rating}</Title> */}
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;

const styles = StyleSheet.create({
  // card: { backgroundColor: "red" },
  // cover: { padding: 20, backgroundColor: "white" },
  // title: { padding: 16 },
});
