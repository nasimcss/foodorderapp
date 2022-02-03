import {
  StatusBar,
  //   StyleSheet,
  //   View,
  SafeAreaView,
  // Platform,
  // FlatList,
} from "react-native";
import styled from "styled-components/native";
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
