import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Image, Pressable } from "react-native";
import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "react-native/Libraries/NewAppScreen";


export default function ModalScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Modal</Text> */}

      <View lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Are you 21 or older?</Text>
      <Text>Please confirm that you're 21 years old or above to proceed.</Text>
      <View>
        <Link href="../" asChild>
          <Pressable>
            {({ pressed }) => (
              <Text style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}>
                Yes
              </Text>
            )}
          </Pressable>
        </Link>
        <Link href="../" asChild>
          <Pressable>
            {({ pressed }) => (
              <Text style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}>
                No
              </Text>
            )}
          </Pressable>
        </Link>
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar
        style={Platform.OS === "ios" ? "light" : "auto"}
        backgroundColor="blue"
     
      />
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
