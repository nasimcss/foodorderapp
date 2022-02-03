// import { Text, View } from "react-native";
import * as React from "react";
import { Card } from "react-native-paper";
import { Text, StyleSheet, View, Image } from "react-native";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import Spacer from "../../../components/spacer/spacer-component";

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
const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
const RestaurantCard = styled(Card)`
  margin-bottom: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const Open = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant Name",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/04/easter-breakfast-of-fried-quail-eggs-on-bread-with-butter-1.jpg",
    ],
    address = "100 Some Randome Street",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray);
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
        {/* <Rating>
          {ratingArray.map(() => (
            <SvgXml width="20" height="20" xml={star} />
          ))}
        </Rating>
        <View>
          <SvgXml width="20" height="20" xml={open} />
        </View> */}
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml width="20" height="20" xml={star} />
            ))}
          </Rating>
          <Open>
            {isClosedTemporarily && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARILY
              </Text>
            )}
            <Spacer variant="left.large" />
            {isOpenNow && (
              <SvgXml key={isOpenNow} width="20" height="20" xml={open} />
            )}
            <Spacer variant="left.large" />
            <Image style={{ width: 20, height: 20 }} source={{ uri: icon }} />
          </Open>
        </Section>

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
