import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const imageWidth = screenWidth - 40;

export const styles = StyleSheet.create({
  Wrapper: {
    width: "100%",
    alignItems: "flex-start",
    backgroundColor: "blue",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    backgroundColor: "red",
  },
  contentContainer: {
    paddingTop: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  imagecontainer: {
    width: imageWidth,
    height: 150, // Set a fixed height for each image
    resizeMode: "cover",
  },
  Content: {
    height: "100%",
    width: "100%",
  },
});
