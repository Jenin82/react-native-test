import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Modal</Text> */}
      <Image source={require("../assets/images/icon.png")} style={{ width: 50, height: 50 }} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/modal.tsx" />

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
