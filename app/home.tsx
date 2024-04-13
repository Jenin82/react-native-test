import { Link } from "expo-router";
import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import bg from "../assets/screenBg/getstarted.png";

export default function HomeScreen(){
  return (
    <ImageBackground source={bg} style={styles.Wrapper} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.textclor}>
          Welcome to a world of relaxation and flavour exploration.
        </Text>
        <Link href={"/signup"} style={styles.btn}>
          reached home
        </Link>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 30,
    paddingBottom: 80,
    gap: 40,
  },
  textclor: {
    color: "white",
    fontSize: 25,
    fontWeight: "500",
  },
  btn: {
    backgroundColor: "#1976D2",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    textAlign: "center",
    color: "white",
  },
});
