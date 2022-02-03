import * as React from "react";
import { Text, View } from "react-native";

import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { SafeArea } from "./src/components/utility/safe-area-component";

import RestaurantsScreen from "./src/features/restaurants/screens/restaurants-screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { SafeAreaView } from "react-native-web";

// const isAndroid = Platform.OS === 'android'
// console.log(StatusBar.currentHeight)

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }
// function MapsScreen() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Maps!</Text>
//     </View>
//   );
// }
const SettingsScreen = () => (
  <SafeArea>
    <Text>SettingsScreen</Text>
  </SafeArea>
);
const MapsScreen = () => (
  <SafeArea>
    <Text>MapsScreen</Text>
  </SafeArea>
);
const Tab = createBottomTabNavigator();

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    // <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
    //   <Text>Our React Native project</Text>
    // </View>
    <>
      {/* <SafeAreaView style={{flex:1, marginTop: isAndroid ? 20 : 0}}> */}
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Maps" component={MapsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
