import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";
export { ErrorBoundary } from "expo-router";

import Getstart from "./getstart";
import SignUp from "./signup";
import HomeScreen from "./home";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const Stack = createStackNavigator();

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack.Navigator
        initialRouteName="getstart"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="getstart" component={Getstart} />
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="home" component={HomeScreen} />
      </Stack.Navigator>
    </ThemeProvider>
  );
}
