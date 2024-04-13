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

type Props = {};

const Getstart = (props: Props) => {
  return (
    <ImageBackground source={bg} style={styles.Wrapper} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.textclor}>
          Welcome to a world of relaxation and flavour exploration.
        </Text>
        <Link href={"/signup"} style={styles.btn}>
          Let’s Get Started
        </Link>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Getstart;

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
    paddingBottom: 100,
    gap:40
  },
  textclor: {
    color: "white",
    fontSize:25,
    fontWeight:"500"
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
