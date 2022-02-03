import * as React from "react";
// import { Provider as PaperProvider } from "react-native-paper";
import { Provider as PaperProvider } from "react-native-paper";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  // Platform,
} from "react-native";
import { Searchbar } from "react-native-paper";
// import { SafeAreaView } from "react-native-web";

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)
export default function App() {
  return (
    // <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //   <Text>Our React Native project</Text>
    // </View>
    <>
      {/* <SafeAreaView style={{flex:1, marginTop: isAndroid ? 20 : 0}}> */}

      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <View style={styles.search}>
            <Searchbar placeholder="Search" />
          </View>
          <View style={styles.list}>
            <Text>List</Text>
          </View>
        </SafeAreaView>
        <ExpoStatusBar style="auto" />
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
    // backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
