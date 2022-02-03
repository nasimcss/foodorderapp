// import { Text, View } from "react-native";
import React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
// import { SvgXml } from "react-native-svg";

// const Button = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const RestaurantCard = styled(Card)`
  background-color: white;
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.secondary};
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
      <Info>
        <Title>{name}</Title>

        <Address>{address}</Address>
      </Info>

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
